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
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-bloomPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThBloomPass) },
  ],
})
export class ThBloomPass<
  T extends BloomPass = BloomPass,
  TARGS = [strength?: number, kernelSize?: number, sigma?: number],
> extends ThPass<T, TARGS> {
  public getType(): Type<BloomPass> {
    return BloomPass;
  }

  @Input()
  public set convolutionUniforms(value: object) {
    if (this._objRef) {
      this._objRef.convolutionUniforms = value;
    }
  }

  public get convolutionUniforms(): object | undefined {
    return this._objRef?.convolutionUniforms;
  }
  @Input()
  public set materialConvolution(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialConvolution = value;
    }
  }

  public get materialConvolution(): ShaderMaterial | undefined {
    return this._objRef?.materialConvolution;
  }
}
