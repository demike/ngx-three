import { ChangeDetectionStrategy, Component, Input, OnChanges, signal } from '@angular/core';
import { NgxThreeModule, Renderer } from 'ngx-three';
import { Group, Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ASSET_PATH } from '../assets';

/**
 * A single benchmark viewport: renders `count` copies of the same GLB model and
 * shows a live FPS / frame-time / draw-call / triangle HUD. The renderer backend
 * (WebGL vs WebGPU) is taken from the DI hierarchy, so the exact same scene can be
 * driven by either backend depending on the wrapping component's providers.
 */
@Component({
  selector: 'app-benchmark-scene',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgxThreeModule],
  styles: [
    `
      :host {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
      }
      .hud {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        padding: 6px 10px;
        font-family: monospace;
        font-size: 12px;
        line-height: 1.5;
        color: #d9ffe0;
        background: rgba(0, 0, 0, 0.55);
        border-bottom-right-radius: 6px;
        pointer-events: none;
      }
      .hud .title {
        font-weight: bold;
        color: #fff;
      }
      .hud .val {
        color: #7fffa6;
      }
    `,
  ],
  template: `
    <div class="hud">
      <div class="title">{{ label }}</div>
      <div>fps: <span class="val">{{ fps() }}</span></div>
      <div>frame: <span class="val">{{ frameMs() }}</span> ms</div>
      <div>draws: <span class="val">{{ drawCalls() }}</span></div>
      <div>tris: <span class="val">{{ triangles() }}</span></div>
    </div>
    <th-canvas (onRender)="onFrame($event)">
      <th-scene>
        <th-hemisphereLight [args]="['#ffffff', '#444466', 2]" />
        <th-directionalLight [position]="[10, 20, 10]" [intensity]="3" />
        <th-perspectiveCamera [args]="[45, 1.6, 0.1, 5000]" [position]="camPos()" [lookAt]="[0, 0, 0]">
          <th-orbitControls [autoRotate]="true" [autoRotateSpeed]="0.6" [target]="[0, 0, 0]" [enableDamping]="true" />
        </th-perspectiveCamera>
        @if (models()) {
          <th-object3D [objRef]="models()!" />
        }
      </th-scene>
    </th-canvas>
  `,
})
export class BenchmarkSceneComponent implements OnChanges {
  @Input() public label = '';
  @Input() public count = 100;

  public readonly models = signal<Group | undefined>(undefined);
  public readonly camPos = signal<[number, number, number]>([0, 40, 120]);
  public readonly fps = signal(0);
  public readonly frameMs = signal(0);
  public readonly drawCalls = signal(0);
  public readonly triangles = signal(0);

  private prototype?: Object3D;
  private frames = 0;
  private accumulatedMs = 0;
  private lastTime = performance.now();
  private autoResetDisabled = false;
  private lastDrawAccum = 0;
  private lastTriAccum = 0;
  private frameDraws = 0;
  private frameTriangles = 0;

  public async ngOnChanges(): Promise<void> {
    await this.buildScene();
  }

  private async buildScene(): Promise<void> {
    if (!this.prototype) {
      const gltf = await new GLTFLoader().loadAsync(`${ASSET_PATH}DamagedHelmet.glb`);
      this.prototype = gltf.scene;
    }

    const group = new Group();
    const perSide = Math.ceil(Math.sqrt(this.count));
    const spacing = 3;
    const offset = ((perSide - 1) * spacing) / 2;

    for (let i = 0; i < this.count; i++) {
      const clone = this.prototype.clone();
      const col = i % perSide;
      const row = Math.floor(i / perSide);
      clone.position.set(col * spacing - offset, 0, row * spacing - offset);
      group.add(clone);
    }

    const span = perSide * spacing;
    this.camPos.set([0, span * 0.5 + 5, span * 1.1 + 10]);
    this.models.set(group);
  }

  public onFrame(event: { renderer: Renderer[] }): void {
    const renderer = event.renderer?.[0] as unknown as {
      info?: {
        autoReset?: boolean;
        render?: { calls?: number; drawCalls?: number; triangles?: number };
      };
    };
    const info = renderer?.info;
    const render = info?.render;

    // The WebGPURenderer runs an internal animation loop that resets `info`
    // ~60x/sec out of sync with ngx-three's render loop, so the counters read as
    // 0. Disable auto-reset and instead derive per-frame counts from the delta of
    // the now-accumulating totals. This keeps WebGL and WebGPU on equal footing.
    if (info && !this.autoResetDisabled) {
      info.autoReset = false;
      this.autoResetDisabled = true;
      this.lastDrawAccum = render?.drawCalls ?? render?.calls ?? 0;
      this.lastTriAccum = render?.triangles ?? 0;
    }

    if (render) {
      const drawAccum = render.drawCalls ?? render.calls ?? 0;
      const triAccum = render.triangles ?? 0;
      const drawDelta = drawAccum - this.lastDrawAccum;
      const triDelta = triAccum - this.lastTriAccum;
      // Guard against an external reset (e.g. renderer re-init) producing negatives.
      this.frameDraws = drawDelta >= 0 ? drawDelta : drawAccum;
      this.frameTriangles = triDelta >= 0 ? triDelta : triAccum;
      this.lastDrawAccum = drawAccum;
      this.lastTriAccum = triAccum;
    }

    const now = performance.now();
    this.accumulatedMs += now - this.lastTime;
    this.lastTime = now;
    this.frames++;

    // Update the HUD roughly twice a second to keep change detection cheap.
    if (this.accumulatedMs >= 500) {
      this.fps.set(Math.round((this.frames * 1000) / this.accumulatedMs));
      this.frameMs.set(Math.round((this.accumulatedMs / this.frames) * 10) / 10);
      this.drawCalls.set(this.frameDraws);
      this.triangles.set(this.frameTriangles);
      this.frames = 0;
      this.accumulatedMs = 0;
    }
  }
}
