import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loader-example',
  templateUrl: './loader-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderExampleComponent {
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender(): void {
    this.rotation = [0, this.rotation[1] + 0.01, 0];
  }
}
