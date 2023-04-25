/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { DataTexture2DArray } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThDataArrayTexture } from './ThDataArrayTexture';

@Component({
  selector: 'th-dataTexture2DArray',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThDataTexture2DArray),
    },
  ],
})
export class ThDataTexture2DArray<
  T extends DataTexture2DArray = DataTexture2DArray,
  TARGS = [data?: BufferSource, width?: number, height?: number, depth?: number]
> extends ThDataArrayTexture<T, TARGS> {
  public getType(): Type<DataTexture2DArray> {
    return DataTexture2DArray;
  }
}
