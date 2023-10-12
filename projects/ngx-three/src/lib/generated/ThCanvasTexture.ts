/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import {
  CanvasTexture,
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  OffscreenCanvas,
  PixelFormat,
  TextureDataType,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-canvasTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThCanvasTexture) },
  ],
})
export class ThCanvasTexture<
  T extends CanvasTexture = CanvasTexture,
  TARGS = [
    canvas: TexImageSource | OffscreenCanvas,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
  ],
> extends ThTexture<T, TARGS> {
  public getType(): Type<CanvasTexture> {
    return CanvasTexture;
  }

  public get isCanvasTexture(): true | undefined {
    return this._objRef?.isCanvasTexture;
  }
}
