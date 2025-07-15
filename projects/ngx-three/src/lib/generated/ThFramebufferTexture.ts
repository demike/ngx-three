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
import { FramebufferTexture } from 'three';
import {
  MagnificationTextureFilter,
  MinificationTextureFilter,
} from 'three/src/constants.js';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-framebufferTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThFramebufferTexture),
    },
  ],
})
export class ThFramebufferTexture<
  T extends FramebufferTexture = FramebufferTexture,
  TARGS = [width: number, height: number],
> extends ThTexture<T, TARGS> {
  public getType(): Type<FramebufferTexture> {
    return FramebufferTexture;
  }

  public get isFramebufferTexture(): true | undefined {
    return this._objRef?.isFramebufferTexture;
  }
  @Input()
  public set magFilter(value: MagnificationTextureFilter) {
    if (this._objRef) {
      this._objRef.magFilter = value;
    }
  }

  public get magFilter(): MagnificationTextureFilter | undefined {
    return this._objRef?.magFilter;
  }
  @Input()
  public set minFilter(value: MinificationTextureFilter) {
    if (this._objRef) {
      this._objRef.minFilter = value;
    }
  }

  public get minFilter(): MinificationTextureFilter | undefined {
    return this._objRef?.minFilter;
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
