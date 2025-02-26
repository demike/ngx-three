import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ThPerspectiveCamera } from 'ngx-three';
import { Vector3 } from 'three';
import { ASSET_PATH } from '../assets';

@Component({
    selector: 'app-plyloader-example',
    templateUrl: './plyloader-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PLYLoaderExampleComponent {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public Math = Math;
  public cameraPosition = new Vector3(3, 0.15, 3);

  @ViewChild('camera')
  public camera?: ThPerspectiveCamera;

  public assetPath = `${ASSET_PATH}dolphins.ply`;
  public onBeforeRender(): void {
    const timer = Date.now() * 0.0005;
    if (this.camera) {
      this.camera.position = new Vector3(Math.sin(timer) * 2.5, 0.15, Math.cos(timer) * 2.5);
      this.camera.lookAt = [0, 0.1, 0];
    }
  }
}
