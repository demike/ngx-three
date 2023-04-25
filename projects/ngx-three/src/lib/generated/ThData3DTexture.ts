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
import { Data3DTexture, TextureFilter } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-data3DTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThData3DTexture) },
  ],
})
export class ThData3DTexture<
  T extends Data3DTexture = Data3DTexture,
  TARGS = [data: BufferSource, width: number, height: number, depth: number]
> extends ThTexture<T, TARGS> {
  public getType(): Type<Data3DTexture> {
    return Data3DTexture;
  }

  @Input()
  public set magFilter(value: TextureFilter) {
    if (this._objRef) {
      this._objRef.magFilter = value;
    }
  }

  @Input()
  public set minFilter(value: TextureFilter) {
    if (this._objRef) {
      this._objRef.minFilter = value;
    }
  }

  @Input()
  public set wrapR(value: boolean) {
    if (this._objRef) {
      this._objRef.wrapR = value;
    }
  }

  @Input()
  public set flipY(value: boolean) {
    if (this._objRef) {
      this._objRef.flipY = value;
    }
  }

  @Input()
  public set generateMipmaps(value: boolean) {
    if (this._objRef) {
      this._objRef.generateMipmaps = value;
    }
  }
}
