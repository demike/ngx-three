/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { DataTexture, DataTexture3D } from 'three';
import {
  LUTPass,
  LUTPassParameters,
} from 'three/examples/jsm/postprocessing/LUTPass';
import { ThPassBase } from '../ThPassBase';
import { ThShaderPass } from './ThShaderPass';

@Component({
  selector: 'th-lUTPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThLUTPass) },
  ],
})
export class ThLUTPass<
  T extends LUTPass = LUTPass,
  TARGS extends any[] = [params: LUTPassParameters]
> extends ThShaderPass<T, TARGS> {
  protected getType(): Type<LUTPass> {
    return LUTPass;
  }

  @Input()
  public set lut(value: DataTexture | DataTexture3D) {
    if (this._objRef) {
      this._objRef.lut = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }
}
