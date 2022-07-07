import { toCodeSandbox } from './codesandbox';
import { toStackblitz } from './stackblitz';

export class EditorService {
  public urls: string[] = [];
  public fileNames: string[] = [];
  public declarations?: string[];

  public setUrls(urls: string[]) {
    this.urls = urls;
    this.fileNames = this.extractFileNames();
  }

  private extractFileNames() {
    return this.urls.map((path) => path.split('/').pop() ?? '');
  }

  public toStackblitz(event?: MouseEvent) {
    event?.preventDefault();
    toStackblitz(this.urls, this.declarations);
  }

  public toCodeSandbox(event?: MouseEvent) {
    event?.preventDefault();
    toCodeSandbox(this.urls, this.declarations);
  }
}
