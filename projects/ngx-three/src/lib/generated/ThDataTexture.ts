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
import {
  DataTexture,
  Mapping,
  PixelFormat,
  TextureDataType,
  TextureEncoding,
  TextureFilter,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-dataTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThDataTexture) },
  ],
})
export class ThDataTexture<
  T extends DataTexture = DataTexture,
  TARGS = [
    data?: BufferSource | null,
    width?: number,
    height?: number,
    format?: PixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: TextureFilter,
    minFilter?: TextureFilter,
    anisotropy?: number,
    encoding?: TextureEncoding
  ]
> extends ThTexture<T, TARGS> {
  public getType(): Type<DataTexture> {
    return DataTexture;
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
  @Input()
  public set unpackAlignment(value: number) {
    if (this._objRef) {
      this._objRef.unpackAlignment = value;
    }
  }

  // @ts-ignore
  public get unpackAlignment(): number | undefined {
    return this._objRef?.unpackAlignment;
  }
  @Input()
  public set format(value: PixelFormat) {
    if (this._objRef) {
      this._objRef.format = value;
    }
  }

  // @ts-ignore
  public get format(): PixelFormat | undefined {
    return this._objRef?.format;
  }
  // @ts-ignore
  public get isDataTexture(): true | undefined {
    return this._objRef?.isDataTexture;
  }
}
