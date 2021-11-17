import sdk from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk/typings/interfaces';
import { GITHUB_ASSET_PATH } from '../assets';
import {
  createIndexHtml,
  createMainTs,
  getFileNameFromFullPath,
  getMainTsUrl,
  getTagNameFromFileName,
  PACKAGE,
  polyfillTs
} from './codesandbox';

export async function toStackblitz(fileUrls: string[]) {
  const mainTsUrl = getMainTsUrl(fileUrls);
  const fileName = getFileNameFromFullPath(mainTsUrl);
  const tagName = getTagNameFromFileName(fileName);

  const project: Project = {
    template: 'angular-cli',
    title: tagName,
    description: 'ngx-three example ' + tagName,
    files: {
      'src/index.html': createIndexHtml(tagName),
      'src/main.ts': createMainTs(fileName),
      'src/polyfills.ts': polyfillTs,
      'src/assets.ts': `export const ASSET_PATH = \'${GITHUB_ASSET_PATH}\';`
    },

    dependencies: {
      'ngx-three': 'latest',

      three: PACKAGE.dependencies.three,
      'simplex-noise': PACKAGE.dependencies['simplex-noise'],
      '@types/three': PACKAGE.devDependencies['@types/three']
    }
  };

  await applySources(fileUrls, project.files);

  sdk.openProject(project);
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
