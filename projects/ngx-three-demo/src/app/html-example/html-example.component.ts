import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DRACOLoaderService } from 'ngx-three';
import * as THREE from 'three';
import { Clock, Plane, Vector3 } from 'three';
import { ASSET_PATH } from '../assets';


/**
 * An example showing
 * - how to use the refById directive.
 * - using draco compression
 * - show html content
 * It selects the screen of the notebook by id and adds the html content node as a child.
 */
@Component({
  selector: 'app-html-example',
  templateUrl: './html-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlExampleComponent  {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public readonly Math = Math;
  public sprite = false;

  public readonly glbPath = `${ASSET_PATH}mac-draco.glb`;
  public readonly clock = new Clock(true);

  public readonly plane = new Plane(new Vector3(0,1,0),3);

  public rotation: [number, number, number] = [0,0,0];
  public position: [number, number, number] = [0,0,0];

  constructor(dracoLoader: DRACOLoaderService) {
    // specify the draco decoder path used by the gltf loader instances
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/libs/draco/gltf/');
    // in this case we need to disable cors (should not be necessary if you host the decoder yourself)
    dracoLoader.setCrossOrigin('no-cors');

    this.calcPose();
  }

  onBeforeRender(): void {
    this.calcPose();
  }

  protected calcPose() {
    const t = this.clock.getElapsedTime();
    this.rotation = [
      THREE.MathUtils.lerp(this.rotation[0], Math.cos(t / 2) / 20 + 0.25, 0.1),
      THREE.MathUtils.lerp(this.rotation[1], Math.sin(t / 4) / 20, 0.1),
      THREE.MathUtils.lerp(this.rotation[2], Math.sin(t / 8) / 20, 0.1)
    ];

    this.position = [0, THREE.MathUtils.lerp(this.position[1], (-2 + Math.sin(t / 2)) / 2, 0.1), 0];
  }

}
