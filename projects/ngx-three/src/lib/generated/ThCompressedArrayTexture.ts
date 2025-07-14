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
import { CompressedArrayTexture } from 'three';
import {
  CompressedPixelFormat,
  TextureDataType,
  Wrapping,
} from 'three/src/constants.js';
import { CompressedTextureMipmap } from 'three/src/textures/CompressedTexture.js';
import { ThTextureBase } from '../ThTextureBase';
import { ThCompressedTexture } from './ThCompressedTexture';

@Component({
  selector: 'th-compressedArrayTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThCompressedArrayTexture),
    },
  ],
})
export class ThCompressedArrayTexture<
  T extends CompressedArrayTexture = CompressedArrayTexture,
  TARGS = [
    mipmaps: CompressedTextureMipmap[],
    width: number,
    height: number,
    depth: number,
    format: CompressedPixelFormat,
    type?: TextureDataType,
  ],
> extends ThCompressedTexture<T, TARGS> {
  public getType(): Type<CompressedArrayTexture> {
    return CompressedArrayTexture;
  }

  public get isCompressedArrayTexture(): true | undefined {
    return this._objRef?.isCompressedArrayTexture;
  }
  public get image():
    | { width: number; height: number; depth: number }
    | undefined {
    return this._objRef?.image;
  }
  @Input()
  public set image(value: { width: number; height: number; depth: number }) {
    if (this._objRef) {
      this._objRef.image = value;
    }
  }

  @Input()
  public set wrapR(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapR = value;
    }
  }

  public get wrapR(): Wrapping | undefined {
    return this._objRef?.wrapR;
  }
  @Input()
  public set layerUpdates(value: Set<number>) {
    if (this._objRef) {
      this._objRef.layerUpdates = value;
    }
  }

  public get layerUpdates(): Set<number> | undefined {
    return this._objRef?.layerUpdates;
  }
}
