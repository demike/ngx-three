/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-types */
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
import { ShaderMaterial } from 'three';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-afterimagePass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThAfterimagePass) },
  ],
})
export class ThAfterimagePass<
  T extends AfterimagePass = AfterimagePass,
  TARGS = /* damp? */ number,
> extends ThPass<T, TARGS> {
  public getType(): Type<AfterimagePass> {
    return AfterimagePass;
  }

  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  public get uniforms(): { [name: string]: { value: any } } | undefined {
    return this._objRef?.uniforms as
      | { [name: string]: { value: any } }
      | undefined;
  }
  @Input()
  public set compFsMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.compFsMaterial = value;
    }
  }

  public get compFsMaterial(): ShaderMaterial | undefined {
    return this._objRef?.compFsMaterial;
  }
  @Input()
  public set copyFsMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.copyFsMaterial = value;
    }
  }

  public get copyFsMaterial(): ShaderMaterial | undefined {
    return this._objRef?.copyFsMaterial;
  }
  public get damp(): number | undefined {
    return this._objRef?.damp;
  }
  @Input()
  public set damp(value: number) {
    if (this._objRef) {
      this._objRef.damp = value;
    }
  }
}
