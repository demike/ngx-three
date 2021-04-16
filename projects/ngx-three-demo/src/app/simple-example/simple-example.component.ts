import { ChangeDetectionStrategy, Component, OnInit, SkipSelf } from '@angular/core';
import { createObj3DProviderArray } from 'ngx-three';
import { ThMesh } from 'ngx-three';
import { ThObject3D } from 'ngx-three';
import * as THREE from 'three';
import { BoxBufferGeometry, MeshStandardMaterial } from 'three';

@Component({
  template: '',

  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'th-box',
  providers: createObj3DProviderArray(Box)
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Box extends ThMesh implements OnInit {
  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
  public ngOnInit() {
    super.ngOnInit();
    if (this.objRef) {
      this.objRef.material = new MeshStandardMaterial({
        color: 'green'
      });

      this.objRef.geometry = new BoxBufferGeometry(1, 1, 1);
    }
  }
}

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleExampleComponent implements OnInit {
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
    }, 200);
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

  ngOnInit(): void {}
}
