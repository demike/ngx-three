/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { CubeDepthTexture, CubeDepthTextureImageData } from 'three';
import {
  DepthTexturePixelFormat,
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  TextureDataType,
  Wrapping,
} from 'three/src/constants.js';
import { ThTextureBase } from '../ThTextureBase';
import { ThDepthTexture } from './ThDepthTexture';

@Component({
  selector: 'th-cubeDepthTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThCubeDepthTexture),
    },
  ],
})
export class ThCubeDepthTexture<
  T extends CubeDepthTexture = CubeDepthTexture,
  TARGS = [
    size: number,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    anisotropy?: number,
    format?: DepthTexturePixelFormat,
  ],
> extends ThDepthTexture<CubeDepthTextureImageData, T, TARGS> {
  public getType(): Type<CubeDepthTexture> {
    return CubeDepthTexture;
  }

  public get isCubeDepthTexture(): true | undefined {
    return this._objRef?.isCubeDepthTexture;
  }
  public get isCubeTexture(): true | undefined {
    return this._objRef?.isCubeTexture;
  }
  public get images(): CubeDepthTextureImageData | undefined {
    return this._objRef?.images;
  }
  @Input()
  public set images(value: CubeDepthTextureImageData) {
    if (this._objRef) {
      this._objRef.images = value;
    }
  }
}
