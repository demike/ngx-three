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
import { VideoFrameTexture } from 'three';
import {
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  PixelFormat,
  TextureDataType,
  Wrapping,
} from 'three/src/constants.js';
import { ThTextureBase } from '../ThTextureBase';
import { ThVideoTexture } from './ThVideoTexture';

@Component({
  selector: 'th-videoFrameTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThVideoFrameTexture),
    },
  ],
})
export class ThVideoFrameTexture<
  T extends VideoFrameTexture = VideoFrameTexture,
  TARGS = [
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
  ],
> extends ThVideoTexture<T, TARGS> {
  public getType(): Type<VideoFrameTexture> {
    return VideoFrameTexture;
  }
}
