/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, Type, forwardRef } from '@angular/core';
import { DataArrayTexture, MagnificationTextureFilter, MinificationTextureFilter } from 'three';
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
  TARGS = [data?: BufferSource | null, width?: number, height?: number, depth?: number],
> extends ThTexture<T, TARGS> {
  public getType(): Type<DataArrayTexture> {
    return DataArrayTexture;
  }

  public get isDataArrayTexture(): true | undefined {
    return this._objRef?.isDataArrayTexture;
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
  public set wrapR(value: boolean) {
    if (this._objRef) {
      this._objRef.wrapR = value;
    }
  }

  public get wrapR(): boolean | undefined {
    return this._objRef?.wrapR;
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
  public set flipY(value: boolean) {
    if (this._objRef) {
      this._objRef.flipY = value;
    }
  }

  public get flipY(): boolean | undefined {
    return this._objRef?.flipY;
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
