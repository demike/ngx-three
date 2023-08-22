/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  ColorSpace,
  CompressedPixelFormat,
  CompressedTexture,
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  TextureDataType,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-compressedTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThCompressedTexture),
    },
  ],
})
export class ThCompressedTexture<
  T extends CompressedTexture = CompressedTexture,
  TARGS = [
    mipmaps: ImageData[],
    width: number,
    height: number,
    format: CompressedPixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    anisotropy?: number,
    colorSpace?: ColorSpace,
  ],
> extends ThTexture<T, TARGS> {
  public getType(): Type<CompressedTexture> {
    return CompressedTexture;
  }

  // @ts-ignore
  public get isCompressedTexture(): true | undefined {
    return this._objRef?.isCompressedTexture;
  }
  @Input()
  public set mipmaps(value: ImageData[]) {
    if (this._objRef) {
      this._objRef.mipmaps = value;
    }
  }

  // @ts-ignore
  public get mipmaps(): ImageData[] | undefined {
    return this._objRef?.mipmaps;
  }
  @Input()
  public set format(value: CompressedPixelFormat) {
    if (this._objRef) {
      this._objRef.format = value;
    }
  }

  // @ts-ignore
  public get format(): CompressedPixelFormat | undefined {
    return this._objRef?.format;
  }
  @Input()
  public set flipY(value: boolean) {
    if (this._objRef) {
      this._objRef.flipY = value;
    }
  }

  // @ts-ignore
  public get flipY(): boolean | undefined {
    return this._objRef?.flipY;
  }
  @Input()
  public set generateMipmaps(value: boolean) {
    if (this._objRef) {
      this._objRef.generateMipmaps = value;
    }
  }

  // @ts-ignore
  public get generateMipmaps(): boolean | undefined {
    return this._objRef?.generateMipmaps;
  }
}
