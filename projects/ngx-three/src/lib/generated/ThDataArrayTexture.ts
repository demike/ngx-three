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
import { DataArrayTexture, TextureFilter } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-dataArrayTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThDataArrayTexture),
    },
  ],
})
export class ThDataArrayTexture<
  T extends DataArrayTexture = DataArrayTexture,
  TARGS = [data?: BufferSource, width?: number, height?: number, depth?: number]
> extends ThTexture<T, TARGS> {
  public getType(): Type<DataArrayTexture> {
    return DataArrayTexture;
  }

  @Input()
  public set magFilter(value: TextureFilter) {
    if (this._objRef) {
      this._objRef.magFilter = value;
    }
  }

  // @ts-ignore
  public get magFilter(): TextureFilter | undefined {
    return this._objRef?.magFilter;
  }
  @Input()
  public set minFilter(value: TextureFilter) {
    if (this._objRef) {
      this._objRef.minFilter = value;
    }
  }

  // @ts-ignore
  public get minFilter(): TextureFilter | undefined {
    return this._objRef?.minFilter;
  }
  @Input()
  public set wrapR(value: boolean) {
    if (this._objRef) {
      this._objRef.wrapR = value;
    }
  }

  // @ts-ignore
  public get wrapR(): boolean | undefined {
    return this._objRef?.wrapR;
  }
  @Input()
  public set flipY(value: boolean) {
    if (this._objRef) {
      this._objRef.flipY = value;
    }
  }

  // @ts-ignore
  public get flipY(): boolean | undefined {
    return this._objRef?.flipY;
  }
  @Input()
  public set generateMipmaps(value: boolean) {
    if (this._objRef) {
      this._objRef.generateMipmaps = value;
    }
  }

  // @ts-ignore
  public get generateMipmaps(): boolean | undefined {
    return this._objRef?.generateMipmaps;
  }
  // @ts-ignore
  public get isDataArrayTexture(): true | undefined {
    return this._objRef?.isDataArrayTexture;
  }
}
