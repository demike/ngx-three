import { ChangeDetectionStrategy, Component, Type, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorService } from '../code/EditorService';

@Component({
    selector: 'app-example-page',
    templateUrl: './example-page.component.html',
    styleUrls: ['./example-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ExamplePageComponent {
  private editorService = inject(EditorService);
  private route = inject(ActivatedRoute);

  public exampleComponent: Type<any> | null = null;

  public codeUrls: string[];

  constructor() {
    this.codeUrls = this.route.snapshot.data.codeUrls ?? [];
    this.editorService.declarations = this.route.snapshot.data.declarations;
    this.exampleComponent = this.route.snapshot.data.exampleComponent;
  }
}
