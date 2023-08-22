/* eslint-disable @typescript-eslint/naming-convention */

import { Type } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk/';
import { GITHUB_ASSET_PATH } from '../assets';
import {
  createIndexHtml,
  createMainTs,
  getFileNameFromFullPath,
  getMainTemplateUrl,
  getMainTsUrl,
  getTagNameFromFileName,
  PACKAGE,
  polyfillTs
} from './codesandbox';

export async function toStackblitz(fileUrls: string[], declarations?: string[]) {
  const mainTsUrl = getMainTsUrl(fileUrls);
  const templateUrl = getMainTemplateUrl(fileUrls);
  const fileName = getFileNameFromFullPath(mainTsUrl);
  const tagName = getTagNameFromFileName(fileName);

  const project: Project & { devDependencies: { [name: string]: string } } = {
    template: 'angular-cli',
    title: tagName,
    description: 'ngx-three example ' + tagName,

    files: {
      'src/index.html': createIndexHtml(tagName),
      'src/main.ts': createMainTs(fileName, declarations),
      'src/polyfills.ts': polyfillTs,
      'src/assets.ts': `export const ASSET_PATH = \'${GITHUB_ASSET_PATH}\';`
    },

    dependencies: {
      'ngx-three': 'latest',
      '@types/three': PACKAGE.devDependencies['@types/three'],
      ...PACKAGE.dependencies
    },
    devDependencies: { ...PACKAGE.devDependencies }
  };

  await applySources(fileUrls, project.files);

  const options = templateUrl ? { openFile: `src/app/${getFileNameFromFullPath(templateUrl)}` } : undefined;
  sdk.openProject(project, options);
}

function applySources(fileUrls: string[], fileMap: { [key: string]: string }) {
  return Promise.all(
    fileUrls.map((url) =>
      fetch(url).then(async (response) => {
        const content = await response.text();
        fileMap[`src/app/${getFileNameFromFullPath(url)}`] = content;
      })
    )
  );
}
