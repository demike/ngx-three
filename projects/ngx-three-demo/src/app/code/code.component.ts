import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { EditorService } from './EditorService';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatTabsModule, MatIconModule, HighlightModule, HighlightPlusModule, AsyncPipe, MatButton],
})
export class CodeComponent {
  readonly editorService = inject(EditorService);

  public fileNames: string[] = [];

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
