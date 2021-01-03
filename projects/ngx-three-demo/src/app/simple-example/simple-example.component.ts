import { Component, OnInit, SkipSelf } from '@angular/core';
import { ThMesh } from 'projects/ngx-three/src/lib/generated/ThMesh';
import { ThObject3D } from 'projects/ngx-three/src/lib/generated/ThObject3D';
import * as THREE from 'three';
import { BoxBufferGeometry, MeshStandardMaterial } from 'three';

export function createProviders() {
  return [];
}

@Component({
  template: '',
  selector: 'th-box',
})
export class Box extends ThMesh {
  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
    console.log('in wrapper');
  }
  public ngOnInit() {
    super.ngOnInit();
    console.log('hohoho');
    this.obj.material = new MeshStandardMaterial({
      color: 'green',
    });

    this.obj.geometry = new BoxBufferGeometry(1, 1, 1);
  }
}

@Component({
  selector: 'app-simple-example',
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.scss'],
  providers: createProviders(),
})
export class SimpleExampleComponent implements OnInit {
  public THREE = THREE;

  public box = new THREE.Box3(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1.5, 1.5, 1.5)
  );
  public color = new THREE.Color(1, 0, 0);

  public rotation: [x: number, y: number, z: number] = [0, 0, 0];

  public onBeforeRender() {
    // console.log('hohoho');
    this.rotation = [0, this.rotation[2] + 0.01, this.rotation[2] + 0.01];
  }

  public material = new THREE.MeshStandardMaterial();

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

  ngOnInit(): void {}
}
