import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ASSET_PATH } from '../assets';
import { provideCSS2dRenderer, provideWebGLRenderer } from 'projects/ngx-three/src/lib/renderer/renderer-providers';
import { NgxThreeModule } from 'ngx-three';

@Component({
  selector: 'app-multi-renderer-example',
  templateUrl: './multi-renderer-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      ::ng-deep .label {
        background-color: lightgrey;
        border-radius: 5px;
        line-height: 1rem;
        padding: 0.5rem;
        display: inline-block;
      }
    `,
  ],
  providers: [provideWebGLRenderer(), provideCSS2dRenderer()],
  imports: [NgxThreeModule],
})
export class MultiRendererExampleComponent {
  public assetPath1 = `${ASSET_PATH}DamagedHelmet.glb`;
  public assetPath2 = `${ASSET_PATH}BoomBox.glb`;
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender(): void {
    this.rotation = [0, this.rotation[1] + 0.01, 0];
  }

  public resetRotation() {
    this.rotation = [0, 0, 0];
  }
}
