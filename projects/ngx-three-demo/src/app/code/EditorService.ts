import { toCodeSandbox } from './codesandbox';
import { toStackblitz } from './stackblitz';

export class EditorService {
  public urls: string[] = [];
  public fileNames: string[] = [];

  public setUrls(urls: string[]) {
    this.urls = urls;
    this.fileNames = this.extractFileNames();
  }

  private extractFileNames() {
    return this.urls.map((path) => path.split('/').pop() ?? '');
  }

  public toCodeSandbox(event?: MouseEvent) {
    event?.preventDefault();
    toCodeSandbox(this.urls);
  }

  public toStackblitz(event?: MouseEvent) {
    event?.preventDefault();
    toStackblitz(this.urls);
  }
}
