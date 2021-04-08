/* eslint-disable prefer-arrow/prefer-arrow-functions */
const polyfillTs = `
import "core-js/es7/reflect";
import "zone.js/dist/zone";`;

const assets = ['BoomBox.glb', 'DamagedHelmet.glb'];

export async function toCodeSandbox(fileUrls: string[]) {
  const mainTsUrl = getMainTsUrl(fileUrls);
  const fileName = getFileNameFromFullPath(mainTsUrl);
  const tagName = getTagNameFromFileName(fileName);

  const files: { [key: string]: any } = {
    'package.json': createPackageJson(),
    'src/index.html': {
      content: createIndexHtml(tagName)
    },
    'src/main.ts': {
      content: createMainTs(fileName)
    },
    'src/polyfills.ts': {
      content: polyfillTs
    }
  };

  await applySources(fileUrls, files);

  /*
  fileUrls.forEach(async (url) => {
    files[`src/app/${getFileNameFromFullPath(url)}`] = {
      contenxt: url,
      isBinary: true
    };
  });
  */

  assets.forEach((asset) => {
    files[`src/assets/${asset}`] = {
      content: 'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/assets/' + asset,
      isBinary: true
    };
  });

  fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
    method: 'POST',
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Accept: 'application/json'
    },
    body: JSON.stringify({ files })
  })
    .then((x) => x.json())
    .then((response) => window.open(`https://codesandbox.io/s/${response.sandbox_id}`, '_blank'));
}

function applySources(fileUrls: string[], fileMap: { [key: string]: any }) {
  return Promise.all(
    fileUrls.map((url) =>
      fetch(url).then(async (response) => {
        fileMap[`src/app/${getFileNameFromFullPath(url)}`] = {
          content: await response.text()
        };
      })
    )
  );
}

function createPackageJson() {
  return {
    content: {
      main: 'src/main.ts',
      dependencies: {
        'ngx-three': 'latest',
        '@angular/common': '^11.2.2',
        '@angular/core': '^11.2.2',
        '@angular/compiler': '~11.2.2',
        '@angular/forms': '~11.2.2',
        '@angular/platform-browser': '~11.2.2',
        '@angular/platform-browser-dynamic': '~11.2.2',
        rxjs: '~6.6.0',
        three: '~0.127.0',
        tslib: '^2.1.0',
        'zone.js': '~0.10.2'
      }
    }
  };
}

function getFileNameFromFullPath(fullPath: string) {
  return fullPath.replace(/^.*[\\\/]/, ''); // works for both / and \
}

function createMainTs(tsFileName: string) {
  const component = getComponentNameFromFileName(tsFileName);
  return `
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
            import { NgxThreeModule } from 'ngx-three';
            import { ${component}} from './app/${tsFileName.replace('.ts', '')}';

            @NgModule({
                imports: [
                    BrowserModule,
                    NgxThreeModule
                ],
                providers: [],
                declarations: [${component}],
                bootstrap: [${component}]
            })
            export class AppModule {}

            platformBrowserDynamic().bootstrapModule(AppModule)
            .catch(err => console.log(err));
            `;
}

function createIndexHtml(mainTagName: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>NgxThreeDemo</title>
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </head>
    <body>
        <${mainTagName}></${mainTagName}>
    </body>
    </html>
    `;
}

function getComponentNameFromFileName(fileName: string) {
  return fileName
    .replace('.ts', '')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => word.toUpperCase())
    .replace(/[-.]/g, '');
}

function getTagNameFromFileName(fileName: string) {
  return 'app-' + fileName.replace('.component.ts', '');
}

function getMainTsUrl(fileUrls: string[]) {
  for (const url of fileUrls) {
    if (url.endsWith('.ts')) {
      return url;
    }
  }
  return '';
}
