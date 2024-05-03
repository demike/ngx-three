import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EditorService } from './EditorService';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  public fileNames: string[] = [];

  constructor(public readonly editorService: EditorService) {}

  @Input()
  public set codeUrls(urls: string[]) {
    this.editorService.setUrls(urls);
    this.fileNames = this.editorService.fileNames;
  }

  public get codeUrls() {
    return this.editorService.urls;
  }

  public getLanguage(fileName: string) {
    return this.editorService.getLanguage(fileName);
  }

  @Input() lineNumbers = false;
}
