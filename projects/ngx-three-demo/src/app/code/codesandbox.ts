/* eslint-disable prefer-arrow/prefer-arrow-functions */
export const polyfillTs = `
import "zone.js";`;

import PACKAGE from '../../../../../package.json';
import { GITHUB_ASSET_PATH } from '../assets';
export { PACKAGE };

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
      content: GITHUB_ASSET_PATH + asset,
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
        three: PACKAGE.dependencies.three,
        tslib: '^2.1.0',
        'zone.js': '~0.10.2',
        'simplex-noise': PACKAGE.dependencies['simplex-noise']
      }
    }
  };
}

export function getFileNameFromFullPath(fullPath: string) {
  return fullPath.replace(/^.*[\\\/]/, ''); // works for both / and \
}

export function createMainTs(tsFileName: string) {
  const component = getComponentNameFromFileName(tsFileName);
  return `
            import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { NgxThreeModule } from 'ngx-three';
            import { FormsModule } from '@angular/forms';
            import { ${component}} from './app/${tsFileName.replace('.ts', '')}';

            @NgModule({
                imports: [
                    BrowserModule,
                    NgxThreeModule,
                    FormsModule
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

export function createIndexHtml(mainTagName: string) {
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

export function getComponentNameFromFileName(fileName: string) {
  return fileName
    .replace('.ts', '')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => word.toUpperCase())
    .replace(/[-.]/g, '');
}

export function getTagNameFromFileName(fileName: string) {
  return 'app-' + fileName.replace('.component.ts', '');
}

export function getMainTsUrl(fileUrls: string[]) {
  for (const url of fileUrls) {
    if (url.endsWith('.ts')) {
      return url;
    }
  }
  return '';
}

export function getMainTemplateUrl(fileUrls: string[]): string | undefined {
  for (const url of fileUrls) {
    if (url.endsWith('.html')) {
      return url;
    }
  }
  return undefined;
}
