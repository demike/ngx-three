// Performance measurement for the ngx-three demo (production build).
//
// Usage:
//   npx ng build ngx-three-demo --configuration production
//   node tools/perf/measure.mjs [out.json] [--runs=3]
//
// Env:
//   PERF_ROOT      directory to serve (default: dist/ngx-three-demo/browser)
//   CHROMIUM_PATH  use an already installed Chromium instead of the playwright managed one
//
// Serves the build on a local port and measures, per scenario:
//  - JS bytes downloaded to show the page
//  - main-thread cost while idle-rendering (CDP Performance metrics, per second)
//  - main-thread cost of high frequency pointer input (5 pointermoves per frame for 60 frames)
// Every scenario runs `runs` times; the median is reported.

import { createServer } from 'node:http';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, join, normalize } from 'node:path';
import { chromium } from 'playwright';

const ROOT = normalize(process.env.PERF_ROOT || join(import.meta.dirname, '../../dist/ngx-three-demo/browser'));
const args = process.argv.slice(2);
const outFile = args.find((a) => !a.startsWith('--'));
const runs = Number(args.find((a) => a.startsWith('--runs='))?.split('=')[1] ?? 3);

const IDLE_MS = 5000;
const POINTER_FRAMES = 60;
const MOVES_PER_FRAME = 5;

const MIME = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.json': 'application/json' };

function startServer() {
  const server = createServer(async (req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let file = normalize(join(ROOT, url));
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end();
      return;
    }
    try {
      if (!(await stat(file)).isFile()) throw new Error('dir');
    } catch {
      file = join(ROOT, 'index.html'); // SPA fallback
    }
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' }).end(body);
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

async function metrics(cdp) {
  const { metrics: list } = await cdp.send('Performance.getMetrics');
  return Object.fromEntries(list.map((m) => [m.name, m.value]));
}

function diff(a, b, seconds) {
  const per = (k) => (b[k] - a[k]) / seconds;
  return {
    scriptMsPerSec: per('ScriptDuration') * 1000,
    taskMsPerSec: per('TaskDuration') * 1000,
    layoutsPerSec: per('LayoutCount'),
    styleRecalcsPerSec: per('RecalcStyleCount'),
  };
}

async function openPage(browser, baseUrl, route) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const js = [];
  page.on('response', async (r) => {
    if (r.url().endsWith('.js')) {
      try {
        const body = await r.text();
        js.push({ url: r.url(), bytes: body.length });
      } catch {
        /* ignore */
      }
    }
  });
  await page.goto(`${baseUrl}/${route}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('th-canvas canvas');
  await page.waitForTimeout(1500); // let assets load & first frames settle
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Performance.enable');
  return { page, cdp, js };
}

async function idle(browser, baseUrl, route) {
  const { page, cdp, js } = await openPage(browser, baseUrl, route);
  const a = await metrics(cdp);
  const deltas = await page.evaluate(
    (ms) =>
      new Promise((resolve) => {
        const d = [];
        let last = performance.now();
        const end = last + ms;
        const tick = (t) => {
          d.push(t - last);
          last = t;
          if (t < end) requestAnimationFrame(tick);
          else resolve(d);
        };
        requestAnimationFrame(tick);
      }),
    IDLE_MS,
  );
  const b = await metrics(cdp);
  await page.close();
  const sorted = [...deltas].sort((x, y) => x - y);
  return {
    ...diff(a, b, IDLE_MS / 1000),
    frameMsMean: deltas.reduce((s, x) => s + x, 0) / deltas.length,
    frameMsP95: sorted[Math.floor(sorted.length * 0.95)],
    jsBytes: js.reduce((s, f) => s + f.bytes, 0),
  };
}

async function pointer(browser, baseUrl, route) {
  const { page, cdp } = await openPage(browser, baseUrl, route);
  // a high frequency mouse delivers several pointermoves per frame; dispatch them in the page
  // (playwright's mouse.move round trips are slower than a frame and would hide any coalescing)
  const sweep = (frames, movesPerFrame) =>
    page.evaluate(
      async ([frames, movesPerFrame]) => {
        const canvas = document.querySelector('th-canvas canvas');
        const rect = canvas.getBoundingClientRect();
        for (let f = 0; f < frames; f++) {
          for (let m = 0; m < movesPerFrame; m++) {
            const t = ((f * movesPerFrame + m) % 100) / 100; // sweep across the canvas centre
            canvas.dispatchEvent(
              new PointerEvent('pointermove', {
                bubbles: true,
                clientX: rect.left + rect.width * (0.2 + 0.6 * t),
                clientY: rect.top + rect.height * (0.3 + 0.4 * t),
              }),
            );
          }
          await new Promise((r) => requestAnimationFrame(r));
        }
      },
      [frames, movesPerFrame],
    );

  // same number of frames without pointer input, to subtract the rendering cost
  let a = await metrics(cdp);
  await sweep(POINTER_FRAMES, 0);
  let b = await metrics(cdp);
  const idleScriptMs = (b.ScriptDuration - a.ScriptDuration) * 1000;

  a = await metrics(cdp);
  await sweep(POINTER_FRAMES, MOVES_PER_FRAME);
  b = await metrics(cdp);
  const scriptMs = (b.ScriptDuration - a.ScriptDuration) * 1000;
  await page.close();
  return {
    pointerScriptMs: scriptMs - idleScriptMs,
    pointerScriptMsPerFrame: (scriptMs - idleScriptMs) / POINTER_FRAMES,
  };
}

const SCENARIOS = [
  { name: 'basic-example idle', route: 'basic-example', fn: idle },
  { name: 'html-example idle', route: 'html-example', fn: idle },
  { name: 'simple-example idle', route: 'simple-example', fn: idle },
  { name: 'outline-pass-events pointermove', route: 'outline-pass-events-example', fn: pointer },
];

const server = await startServer();
const baseUrl = `http://127.0.0.1:${server.address().port}`;
// CHROMIUM_PATH lets you reuse an already installed Chromium instead of `npx playwright install`
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
  args: ['--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});

const result = {};
try {
  for (const s of SCENARIOS) {
    const samples = [];
    for (let i = 0; i < runs; i++) {
      samples.push(await s.fn(browser, baseUrl, s.route));
    }
    const keys = Object.keys(samples[0]);
    result[s.name] = Object.fromEntries(keys.map((k) => [k, +median(samples.map((x) => x[k])).toFixed(2)]));
    console.log(s.name, result[s.name]);
  }
} finally {
  await browser.close();
  server.close();
}

if (outFile) {
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, JSON.stringify(result, null, 2));
  console.log(`written ${outFile}`);
}
