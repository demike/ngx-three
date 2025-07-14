/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
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
  standalone: false,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) },
  ],
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
    colorSpace?: string,
  ],
> extends ThTexture<T, TARGS> {
  public getType(): Type<CubeTexture> {
    return CubeTexture;
  }

  public get isCubeTexture(): true | undefined {
    return this._objRef?.isCubeTexture;
  }
  public get image(): any | undefined {
    return this._objRef?.image;
  }
  @Input()
  public set image(value: any) {
    if (this._objRef) {
      this._objRef.image = value;
    }
  }

  public get images(): any | undefined {
    return this._objRef?.images;
  }
  @Input()
  public set images(value: any) {
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
