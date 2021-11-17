import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ASSET_PATH } from '../assets';

@Component({
  selector: 'app-loader-example',
  templateUrl: './loader-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderExampleComponent {
  public assetPath1 = `${ASSET_PATH}DamagedHelmet.glb`;
  public assetPath2 = `${ASSET_PATH}BoomBox.glb`;
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender(): void {
    this.rotation = [0, this.rotation[1] + 0.01, 0];
  }
}
