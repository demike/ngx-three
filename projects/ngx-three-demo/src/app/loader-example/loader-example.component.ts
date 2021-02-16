import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SimpleExampleComponent } from '../simple-example/simple-example.component';

@Component({
  selector: 'app-loader-example',
  templateUrl: './loader-example.component.html',
  styleUrls: ['./loader-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderExampleComponent extends SimpleExampleComponent {
  public onBeforeRender(): void {
    this.rotation = [0, this.rotation[1] + 0.01, 0];
  }
}
