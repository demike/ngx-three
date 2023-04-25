/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { FramebufferTexture, PixelFormat } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-framebufferTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThFramebufferTexture),
    },
  ],
})
export class ThFramebufferTexture<
  T extends FramebufferTexture = FramebufferTexture,
  TARGS = [width: number, height: number, format: PixelFormat]
> extends ThTexture<T, TARGS> {
  public getType(): Type<FramebufferTexture> {
    return FramebufferTexture;
  }
}
