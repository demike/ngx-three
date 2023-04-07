import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, SkipSelf, ViewChild } from '@angular/core';
import { ThCanvas, ThView, createObj3DProviderArray } from 'ngx-three';
import { ThMesh } from 'ngx-three';
import { ThObject3D } from 'ngx-three';
import * as THREE from 'three';
import { BoxGeometry, MeshStandardMaterial } from 'three';

@Component({
  template: '',
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'th-box',
  providers: createObj3DProviderArray(Box),
  changeDetection: ChangeDetectionStrategy.OnPush
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

      this.objRef.geometry = new BoxGeometry(1, 1, 1);
    }
  }
}

@Component({
  selector: 'app-webxr-example',
  templateUrl: './webxr-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebXRExampleComponent implements AfterViewInit {
  @ViewChild(ThCanvas, { static: true }) 
  canvas?: ThCanvas;

  @ViewChild(ThView, { static: true }) 
  view?: ThView;

  public arSupported = false;
  public vrSupported = false;

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

  ngAfterViewInit(): void {
    this.view?.supportsWebXR('immersive-vr').then((supported) => {
      this.vrSupported = supported;
    });
    this.view?.supportsWebXR('immersive-ar').then((supported) => {
      this.arSupported = supported;
    });
  }

  public enterWebXR(sessionMode: XRSessionMode): void {
    if(this.view){
      this.view.enterWebXR(sessionMode);
    }
  }
}
