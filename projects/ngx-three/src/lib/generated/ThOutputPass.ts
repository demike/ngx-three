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
import { RawShaderMaterial } from 'three';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-outputPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThOutputPass) },
  ],
})
export class ThOutputPass<
  T extends OutputPass = OutputPass,
  TARGS = [],
> extends ThPass<T, TARGS> {
  public getType(): Type<OutputPass> {
    return OutputPass;
  }

  public get isOutputPass(): true | undefined {
    return this._objRef?.isOutputPass;
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
  public set material(value: RawShaderMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  public get material(): RawShaderMaterial | undefined {
    return this._objRef?.material;
  }
}
