import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  createObj3DProviderArray,
  ThBox3Helper,
  ThGridHelper,
  ThPointLight,
  ThAmbientLight,
  ThScene,
  ThCanvas,
  ThPerspectiveCamera,
} from 'ngx-three';
import { ThMesh } from 'ngx-three';
import { provideWebGLRenderer } from 'projects/ngx-three/src/lib/renderer/renderer-providers';
import * as THREE from 'three';
import { BoxGeometry, MeshStandardMaterial } from 'three';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'th-box',
  providers: createObj3DProviderArray(Box),
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Box extends ThMesh implements OnInit {
  public ngOnInit() {
    super.ngOnInit();
    if (this.objRef) {
      this.objRef.material = new MeshStandardMaterial({
        color: 'green',
      });

      this.objRef.geometry = new BoxGeometry(1, 1, 1);
    }
  }
}

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideWebGLRenderer()],
  imports: [ThBox3Helper, ThGridHelper, ThPointLight, Box, ThAmbientLight, ThScene, ThCanvas, ThPerspectiveCamera],
})
export class SimpleExampleComponent {
  constructor() {
    this.material.color.set('green');

    setInterval(() => {
      if (this.material.color.r !== 0) {
        this.material = new THREE.MeshStandardMaterial();

        this.material.color.set('green');
      } else {
        this.material = new THREE.MeshStandardMaterial();
        this.material.color.set('red');
      }
    }, 400);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public THREE = THREE;

  public box = new THREE.Box3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1.5, 1.5, 1.5));
  public color = new THREE.Color(1, 0, 0);

  public rotation: [x: number, y: number, z: number] = [0, 0, 0];

  public material = new THREE.MeshStandardMaterial();

  public selected = false;

  public onBeforeRender() {
    this.rotation = [0, this.rotation[2] + 0.01, this.rotation[2] + 0.01];
  }
}
