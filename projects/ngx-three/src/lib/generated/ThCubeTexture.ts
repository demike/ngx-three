/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import {
  CubeTexture,
  CubeTextureMapping,
  MagnificationTextureFilter,
  MinificationTextureFilter,
  PixelFormat,
  TextureDataType,
  TextureEncoding,
  Wrapping
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-cubeTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) }]
})
export class ThCubeTexture<
  T extends CubeTexture = CubeTexture,
  TARGS = [
    images?: any[],
    mapping?: CubeTextureMapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
    encoding?: TextureEncoding
  ]
> extends ThTexture<T, TARGS> {
  public getType(): Type<CubeTexture> {
    return CubeTexture;
  }

  // @ts-ignore
  public get isCubeTexture(): true | undefined {
    return this._objRef?.isCubeTexture;
  }
  @Input()
  public set mapping(value: CubeTextureMapping) {
    if (this._objRef) {
      this._objRef.mapping = value;
    }
  }

  // @ts-ignore
  public get mapping(): CubeTextureMapping | undefined {
    return this._objRef?.mapping;
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
}
