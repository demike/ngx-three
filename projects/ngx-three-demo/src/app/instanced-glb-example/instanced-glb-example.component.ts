import { ChangeDetectionStrategy, Component, effect, inject, model, resource, signal } from '@angular/core';
import { ASSET_PATH } from '../assets';
import { buildInstancedScene, GLTFLoaderService, NgxThreeModule, updateInstanceMatrix } from 'ngx-three';
import { Object3D } from 'three';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-instanced-glb-example',
  templateUrl: './instanced-glb-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxThreeModule, FormsModule],
})
export class InstancedGLBExampleComponent {
  public assetPath1 = `${ASSET_PATH}DamagedHelmet.glb`;
  public instanceCnt = model(100);
  public rotation = signal(0);
  private loader = inject(GLTFLoaderService);

  private dummy = new Object3D();

  protected helmets = resource({
    params: this.instanceCnt,
    loader: async ({ params }) => {
      const glb = await this.loader.load(this.assetPath1);
      return buildInstancedScene(glb.scene, params /* instanceCnt */);
    },
  }).value;

  private updateInstancesEffect = effect(() => {
    const helmets = this.helmets();
    const instanceCnt = this.instanceCnt();
    if (!helmets) return;
    for (let i = 0; i < instanceCnt; i++) {
      const rows = Math.ceil(Math.sqrt(instanceCnt));
      const cols = rows;
      const row = Math.floor(i / rows);
      const col = i % rows;

      this.dummy.position.set((row - rows / 2) * 2.5, 0, 2.5 * (col - cols / 2));
      this.dummy.rotation.set(0, this.rotation() * (col - cols / 2), 0);
      this.dummy.updateMatrix();
      updateInstanceMatrix(helmets, i, this.dummy.matrix);
    }
  });

  public onBeforeRender(): void {
    this.rotation.update((v) => v + 0.01);
  }
}
