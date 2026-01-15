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
import { Data3DTexture, Data3DTextureImageData } from 'three';
import {
  MagnificationTextureFilter,
  MinificationTextureFilter,
  Wrapping,
} from 'three/src/constants.js';
import { TypedArray } from 'three/src/core/BufferAttribute.js';
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
  TARGS = [
    data?: TypedArray | null,
    width?: number,
    height?: number,
    depth?: number,
  ],
> extends ThTexture<Data3DTextureImageData, T, TARGS> {
  public getType(): Type<Data3DTexture> {
    return Data3DTexture;
  }

  public get isData3DTexture(): true | undefined {
    return this._objRef?.isData3DTexture;
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
  public set wrapR(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapR = value;
    }
  }

  public get wrapR(): Wrapping | undefined {
    return this._objRef?.wrapR;
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
  @Input()
  public set unpackAlignment(value: number) {
    if (this._objRef) {
      this._objRef.unpackAlignment = value;
    }
  }

  public get unpackAlignment(): number | undefined {
    return this._objRef?.unpackAlignment;
  }
}
