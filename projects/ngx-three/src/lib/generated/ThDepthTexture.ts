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
import {
  DepthTexture,
  DepthTexturePixelFormat,
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  TextureComparisonFunction,
  TextureDataType,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-depthTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThDepthTexture) },
  ],
})
export class ThDepthTexture<
  T extends DepthTexture = DepthTexture,
  TARGS = [
    width: number,
    height: number,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    anisotropy?: number,
    format?: DepthTexturePixelFormat,
  ],
> extends ThTexture<T, TARGS> {
  public getType(): Type<DepthTexture> {
    return DepthTexture;
  }

  public get isDepthTexture(): true | undefined {
    return this._objRef?.isDepthTexture;
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
  @Input()
  public set format(value: DepthTexturePixelFormat) {
    if (this._objRef) {
      this._objRef.format = value;
    }
  }

  public get format(): DepthTexturePixelFormat | undefined {
    return this._objRef?.format;
  }
  @Input()
  public set type(value: TextureDataType) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  public get type(): TextureDataType | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set compareFunction(value: TextureComparisonFunction | null) {
    if (this._objRef) {
      this._objRef.compareFunction = value;
    }
  }

  public get compareFunction(): (TextureComparisonFunction | null) | undefined {
    return this._objRef?.compareFunction;
  }
}
