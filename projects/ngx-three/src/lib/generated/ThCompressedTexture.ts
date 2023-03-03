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
import {
  CompressedPixelFormat,
  CompressedTexture,
  Mapping,
  TextureDataType,
  TextureEncoding,
  TextureFilter,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-compressedTexture',
  template: '',
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
    format?: CompressedPixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: TextureFilter,
    minFilter?: TextureFilter,
    anisotropy?: number,
    encoding?: TextureEncoding
  ]
> extends ThTexture<T, TARGS> {
  public getType(): Type<CompressedTexture> {
    return CompressedTexture;
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
  // @ts-ignore
  public get isCompressedTexture(): true | undefined {
    return this._objRef?.isCompressedTexture;
  }
}
