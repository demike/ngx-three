/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { CompressedCubeTexture } from 'three';
import { CompressedPixelFormat, TextureDataType } from 'three/src/constants.js';
import { ThTextureBase } from '../ThTextureBase';
import { ThCompressedTexture } from './ThCompressedTexture';

@Component({
  selector: 'th-compressedCubeTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThCompressedCubeTexture),
    },
  ],
})
export class ThCompressedCubeTexture<
  T extends CompressedCubeTexture = CompressedCubeTexture,
  TARGS = [
    images: Array<{ width: number; height: number }>,
    format?: CompressedPixelFormat,
    type?: TextureDataType,
  ],
> extends ThCompressedTexture<T, TARGS> {
  public getType(): Type<CompressedCubeTexture> {
    return CompressedCubeTexture;
  }

  public get isCompressedCubeTexture(): true | undefined {
    return this._objRef?.isCompressedCubeTexture;
  }
  public get isCubeTexture(): true | undefined {
    return this._objRef?.isCubeTexture;
  }
}
