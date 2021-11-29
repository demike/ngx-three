import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { toCodeSandbox } from './codesandbox';
import { EditorService } from './EditorService';
import { toStackblitz } from './stackblitz';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @Input() lineNumbers = false;
}
