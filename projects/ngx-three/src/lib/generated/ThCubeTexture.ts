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
import { CubeTexture } from 'three';
import {
  CubeTextureMapping,
  MagnificationTextureFilter,
  MinificationTextureFilter,
  PixelFormat,
  TextureDataType,
  Wrapping,
} from 'three/src/constants.js';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-cubeTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) },
  ],
})
export class ThCubeTexture<
  TImage = unknown,
  T extends CubeTexture<TImage> = CubeTexture<TImage>,
  TARGS = [
    images?: TImage[],
    mapping?: CubeTextureMapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: MagnificationTextureFilter,
    minFilter?: MinificationTextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
    colorSpace?: string,
  ],
> extends ThTexture<TImage[], T, TARGS> {
  public getType(): Type<CubeTexture<TImage>> {
    return CubeTexture;
  }

  public get isCubeTexture(): true | undefined {
    return this._objRef?.isCubeTexture;
  }
  public get images(): TImage[] | undefined {
    return this._objRef?.images;
  }
  @Input()
  public set images(value: TImage[]) {
    if (this._objRef) {
      this._objRef.images = value;
    }
  }

  @Input()
  public set mapping(value: CubeTextureMapping) {
    if (this._objRef) {
      this._objRef.mapping = value;
    }
  }

  public get mapping(): CubeTextureMapping | undefined {
    return this._objRef?.mapping;
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
}
