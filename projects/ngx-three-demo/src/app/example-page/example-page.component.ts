import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../code/EditorService';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements OnInit {
  public exampleComponent: Type<any> | null = null;

  public codeUrls: string[];

  constructor(private editorService: EditorService, private route: ActivatedRoute) {
    this.codeUrls = this.route.snapshot.data.codeUrls ?? [];
    this.exampleComponent = this.route.snapshot.data.exampleComponent;
    this.editorService.setExampleClassName(this.route.snapshot.data.exampleClassName ?? this.exampleComponent?.name);
  }

  ngOnInit(): void {}
}
