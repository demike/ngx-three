/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { DataTexture3D } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThData3DTexture } from './ThData3DTexture';

@Component({
  selector: 'th-dataTexture3D',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThDataTexture3D) },
  ],
})
export class ThDataTexture3D<
  T extends DataTexture3D = DataTexture3D,
  TARGS = [data: BufferSource, width: number, height: number, depth: number]
> extends ThData3DTexture<T, TARGS> {
  public getType(): Type<DataTexture3D> {
    return DataTexture3D;
  }
}
