import { Component } from '@angular/core';
import { Object3D } from 'three';
import { ASSET_PATH } from '../assets';

@Component({
  selector: 'app-dynamic-loader-example',
  templateUrl: './dynamic-loader-example.component.html'
})
export class DynamicLoaderExampleComponent {
  public modelUrl: string;
  public modelScale: [number, number, number] = [1, 1, 1];
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];

  public readonly modelUrl1 = `${ASSET_PATH}DamagedHelmet.glb`;
  public readonly modelUrl2 = `${ASSET_PATH}BoomBox.glb`;

  constructor() {
    this.modelUrl = this.toggleModel();
    window.setInterval(() => this.toggleModel(), 3000);
  }

  public toggleModel() {
    if (this.modelUrl !== this.modelUrl1) {
      this.modelUrl = this.modelUrl1;
    } else {
      this.modelUrl = this.modelUrl2;
    }

    return this.modelUrl;
  }

  public onLoaded() {
    if (this.modelUrl !== this.modelUrl1) {
      this.modelScale = [100, 100, 100];
    } else {
      this.modelScale = [1, 1, 1];
    }
  }

  public onRefChange(newRef: Object3D) {
    // objRef$ emits every time a new object is set
    // ( also if a loader has loaded the new object)
  }

  public onBeforeRender(): void {
    this.rotation = [0, this.rotation[1] + 0.01, 0];
  }
}
