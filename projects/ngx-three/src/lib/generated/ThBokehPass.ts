/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { Camera, Scene, ShaderMaterial } from 'three';
import {
  BokehPass,
  BokehPassParameters,
} from 'three/examples/jsm/postprocessing/BokehPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-bokehPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
  ],
})
export class ThBokehPass<
  T extends BokehPass = BokehPass,
  TARGS = [scene: Scene, camera: Camera, params: BokehPassParameters],
> extends ThPass<T, TARGS> {
  public getType(): Type<BokehPass> {
    return BokehPass;
  }

  @Input()
  public set scene(value: Scene) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  public get scene(): Scene | undefined {
    return this._objRef?.scene;
  }
  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set materialBokeh(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialBokeh = value;
    }
  }

  public get materialBokeh(): ShaderMaterial | undefined {
    return this._objRef?.materialBokeh;
  }
  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  public get uniforms(): { [name: string]: { value: any } } | undefined {
    return this._objRef?.uniforms as
      { [name: string]: { value: any } } | undefined;
  }
}
