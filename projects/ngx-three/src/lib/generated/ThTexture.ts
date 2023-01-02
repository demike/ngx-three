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
  Mapping,
  Matrix3,
  OffscreenCanvas,
  PixelFormat,
  PixelFormatGPU,
  Source,
  Texture,
  TextureDataType,
  TextureEncoding,
  TextureFilter,
  Vector2,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-texture',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThTexture) },
  ],
})
export class ThTexture<
  T extends Texture = Texture,
  TARGS = [
    image?: TexImageSource | OffscreenCanvas,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: TextureFilter,
    minFilter?: TextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
    encoding?: TextureEncoding
  ]
> extends ThTextureBase<T, TARGS> {
  public getType(): Type<Texture> {
    return Texture;
  }

  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  @Input()
  public set sourceFile(value: string) {
    if (this._objRef) {
      this._objRef.sourceFile = value;
    }
  }

  @Input()
  public set source(value: Source) {
    if (this._objRef) {
      this._objRef.source = value;
    }
  }

  @Input()
  public set mipmaps(value: any[]) {
    if (this._objRef) {
      this._objRef.mipmaps = value;
    }
  }

  @Input()
  public set mapping(value: Mapping) {
    if (this._objRef) {
      this._objRef.mapping = value;
    }
  }

  @Input()
  public set wrapS(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapS = value;
    }
  }

  @Input()
  public set wrapT(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapT = value;
    }
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
  public set anisotropy(value: number) {
    if (this._objRef) {
      this._objRef.anisotropy = value;
    }
  }

  @Input()
  public set format(value: PixelFormat) {
    if (this._objRef) {
      this._objRef.format = value;
    }
  }

  @Input()
  public set internalFormat(value: PixelFormatGPU | null) {
    if (this._objRef) {
      this._objRef.internalFormat = value;
    }
  }

  @Input()
  public set type(value: TextureDataType) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set matrix(
    value:
      | Matrix3
      | [
          n11: number,
          n12: number,
          n13: number,
          n21: number,
          n22: number,
          n23: number,
          n31: number,
          n32: number,
          n33: number
        ]
  ) {
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix3>(this._objRef.matrix, value);
    }
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  @Input()
  public set offset(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.offset = applyValue<Vector2>(this._objRef.offset, value);
    }
  }
  @Input()
  public set repeat(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.repeat = applyValue<Vector2>(this._objRef.repeat, value);
    }
  }
  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector2>(this._objRef.center, value);
    }
  }
  @Input()
  public set rotation(value: number) {
    if (this._objRef) {
      this._objRef.rotation = value;
    }
  }

  @Input()
  public set generateMipmaps(value: boolean) {
    if (this._objRef) {
      this._objRef.generateMipmaps = value;
    }
  }

  @Input()
  public set premultiplyAlpha(value: boolean) {
    if (this._objRef) {
      this._objRef.premultiplyAlpha = value;
    }
  }

  @Input()
  public set flipY(value: boolean) {
    if (this._objRef) {
      this._objRef.flipY = value;
    }
  }

  @Input()
  public set unpackAlignment(value: number) {
    if (this._objRef) {
      this._objRef.unpackAlignment = value;
    }
  }

  @Input()
  public set encoding(value: TextureEncoding) {
    if (this._objRef) {
      this._objRef.encoding = value;
    }
  }

  @Input()
  public set isRenderTargetTexture(value: boolean) {
    if (this._objRef) {
      this._objRef.isRenderTargetTexture = value;
    }
  }

  @Input()
  public set needsPMREMUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.needsPMREMUpdate = value;
    }
  }

  @Input()
  public set userData(value: any) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  @Input()
  public set version(value: number) {
    if (this._objRef) {
      this._objRef.version = value;
    }
  }
}
