import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-loader-example',
  templateUrl: './dynamic-loader-example.component.html',
  styleUrls: ['./dynamic-loader-example.component.scss']
})
export class DynamicLoaderExampleComponent {
  public modelUrl: string;
  public modelScale: [number, number, number] = [1, 1, 1];
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];

  constructor() {
    this.modelUrl = this.toggleModel();
    window.setInterval(() => this.toggleModel(), 3000);
  }

  public toggleModel() {
    if (this.modelUrl !== 'assets/DamagedHelmet.glb') {
      this.modelUrl = 'assets/DamagedHelmet.glb';
    } else {
      this.modelUrl = 'assets/BoomBox.glb';
    }

    return this.modelUrl;
  }

  public onLoaded() {
    if (this.modelUrl !== 'assets/DamagedHelmet.glb') {
      this.modelScale = [100, 100, 100];
    } else {
      this.modelScale = [1, 1, 1];
    }
  }

  public onBeforeRender(): void {
    this.rotation = [0, this.rotation[1] + 0.01, 0];
  }
}
