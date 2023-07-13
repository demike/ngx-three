/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Data3DTexture, DataTexture } from 'three';
import {
  LUTPass,
  LUTPassParameters,
} from 'three/examples/jsm/postprocessing/LUTPass';
import { ThPassBase } from '../ThPassBase';
import { ThShaderPass } from './ThShaderPass';

@Component({
  selector: 'th-lUTPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThLUTPass) },
  ],
})
export class ThLUTPass<
  T extends LUTPass = LUTPass,
  TARGS = /* params */ LUTPassParameters
> extends ThShaderPass<T, TARGS> {
  public getType(): Type<LUTPass> {
    return LUTPass;
  }

  @Input()
  public set lut(value: DataTexture | Data3DTexture) {
    if (this._objRef) {
      this._objRef.lut = value;
    }
  }

  // @ts-ignore
  public get lut(): (DataTexture | Data3DTexture) | undefined {
    return this._objRef?.lut;
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  // @ts-ignore
  public get intensity(): number | undefined {
    return this._objRef?.intensity;
  }
}
