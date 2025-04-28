/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { CompressedTexture, CompressedTextureMipmap } from 'three';
import {
  CompressedPixelFormat,
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  TextureDataType,
  Wrapping,
} from 'three/src/constants.js';
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
    mipmaps?: CompressedTextureMipmap[],
    width?: number,
    height?: number,
    format?: CompressedPixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    anisotropy?: number,
    colorSpace?: string,
  ],
> extends ThTexture<T, TARGS> {
  public getType(): Type<CompressedTexture> {
    return CompressedTexture;
  }

  public get isCompressedTexture(): true | undefined {
    return this._objRef?.isCompressedTexture;
  }
  public get image(): { width: number; height: number } | undefined {
    return this._objRef?.image;
  }
  @Input()
  public set image(value: { width: number; height: number }) {
    if (this._objRef) {
      this._objRef.image = value;
    }
  }

  @Input()
  public set mipmaps(value: CompressedTextureMipmap[] | undefined) {
    if (this._objRef) {
      this._objRef.mipmaps = value;
    }
  }

  public get mipmaps(): (CompressedTextureMipmap[] | undefined) | undefined {
    return this._objRef?.mipmaps;
  }
  @Input()
  public set format(value: CompressedPixelFormat) {
    if (this._objRef) {
      this._objRef.format = value;
    }
  }

  public get format(): CompressedPixelFormat | undefined {
    return this._objRef?.format;
  }
  @Input()
  public set flipY(value: boolean) {
    if (this._objRef) {
      this._objRef.flipY = value;
    }
  }

  public get flipY(): boolean | undefined {
    return this._objRef?.flipY;
  }
  @Input()
  public set generateMipmaps(value: boolean) {
    if (this._objRef) {
      this._objRef.generateMipmaps = value;
    }
  }

  public get generateMipmaps(): boolean | undefined {
    return this._objRef?.generateMipmaps;
  }
}
