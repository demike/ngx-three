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
export class CodeComponent implements OnInit {
  private urls: string[] = [];
  public fileNames: string[] = [];

  constructor(public readonly editorService: EditorService) {}

  @Input()
  public set codeUrls(urls: string[]) {
    this.editorService.setUrls(urls);
  }

  public get codeUrls() {
    return this.editorService.urls;
  }

  @Input() lineNumbers = false;

  ngOnInit(): void {}
}
