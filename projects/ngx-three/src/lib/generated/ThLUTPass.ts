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
import { Data3DTexture, DataTexture } from 'three';
import {
  LUTPass,
  LUTPassParameters,
} from 'three/examples/jsm/postprocessing/LUTPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThShaderPass } from './ThShaderPass';

@Component({
  selector: 'th-lUTPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThLUTPass) },
  ],
})
export class ThLUTPass<
  T extends LUTPass = LUTPass,
  TARGS = /* params? */ LUTPassParameters,
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

  public get lut(): (DataTexture | Data3DTexture) | undefined {
    return this._objRef?.lut;
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  public get intensity(): number | undefined {
    return this._objRef?.intensity;
  }
}
