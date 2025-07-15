/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { CanvasTexture } from 'three';
import {
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  PixelFormat,
  TextureDataType,
  Wrapping,
} from 'three/src/constants.js';
import { OffscreenCanvas } from 'three/src/textures/Texture.js';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-canvasTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThCanvasTexture) },
  ],
})
export class ThCanvasTexture<
  T extends CanvasTexture = CanvasTexture,
  TARGS = [
    canvas?: TexImageSource | OffscreenCanvas,
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
