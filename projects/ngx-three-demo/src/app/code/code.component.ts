import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent implements OnInit {
  private urls: string[] = [];

  constructor() {}

  @Input()
  public set codeUrls(urls: string[]) {
    this.urls = urls;
    this.fileNames = this.extractFileNames();
  }

  public get codeUrls() {
    return this.urls;
  }

  @Input() languages?: string[];
  @Input() lineNumbers = false;

  public fileNames: string[] = [];

  private extractFileNames() {
    return this.urls.map((path) => path.split('/').pop() ?? '');
  }

  ngOnInit(): void {}
}
