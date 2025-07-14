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
import { Matrix3, OffscreenCanvas, Texture } from 'three';
import {
  AnyMapping,
  AnyPixelFormat,
  ColorSpace,
  MagnificationTextureFilter,
  Mapping,
  MinificationTextureFilter,
  PixelFormat,
  PixelFormatGPU,
  TextureDataType,
  Wrapping,
} from 'three/src/constants.js';
import { RenderTarget } from 'three/src/core/RenderTarget.js';
import { Vector2 } from 'three/src/math/Vector2.js';
import { CompressedTextureMipmap } from 'three/src/textures/CompressedTexture.js';
import { CubeTexture } from 'three/src/textures/CubeTexture.js';
import { Source } from 'three/src/textures/Source.js';
import { ThTextureBase } from '../ThTextureBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-texture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThTexture) },
  ],
})
export class ThTexture<
  T extends Texture = Texture,
  TARGS =
    | [
        image?: TexImageSource | OffscreenCanvas,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        colorSpace?: ColorSpace,
      ]
    | [
        image: TexImageSource | OffscreenCanvas,
        mapping: Mapping,
        wrapS: Wrapping,
        wrapT: Wrapping,
        magFilter: MagnificationTextureFilter,
        minFilter: MinificationTextureFilter,
        format: PixelFormat,
        type: TextureDataType,
        anisotropy: number,
      ],
> extends ThTextureBase<T, TARGS> {
  public getType(): Type<Texture> {
    return Texture;
  }

  public get isTexture(): true | undefined {
    return this._objRef?.isTexture;
  }
  public get id(): number | undefined {
    return this._objRef?.id;
  }
  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  public get uuid(): string | undefined {
    return this._objRef?.uuid;
  }
  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  public get name(): string | undefined {
    return this._objRef?.name;
  }
  @Input()
  public set source(value: Source) {
    if (this._objRef) {
      this._objRef.source = value;
    }
  }

  public get source(): Source | undefined {
    return this._objRef?.source;
  }
  public get width(): number | undefined {
    return this._objRef?.width;
  }
  public get height(): number | undefined {
    return this._objRef?.height;
  }
  public get depth(): number | undefined {
    return this._objRef?.depth;
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

  @Input()
  public set mipmaps(
    value:
      | CompressedTextureMipmap[]
      | CubeTexture[]
      | HTMLCanvasElement[]
      | undefined,
  ) {
    if (this._objRef) {
      this._objRef.mipmaps = value;
    }
  }

  public get mipmaps():
    | (
        | CompressedTextureMipmap[]
        | CubeTexture[]
        | HTMLCanvasElement[]
        | undefined
      )
    | undefined {
    return this._objRef?.mipmaps;
  }
  @Input()
  public set mapping(value: AnyMapping) {
    if (this._objRef) {
      this._objRef.mapping = value;
    }
  }

  public get mapping(): AnyMapping | undefined {
    return this._objRef?.mapping;
  }
  @Input()
  public set channel(value: number) {
    if (this._objRef) {
      this._objRef.channel = value;
    }
  }

  public get channel(): number | undefined {
    return this._objRef?.channel;
  }
  @Input()
  public set wrapS(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapS = value;
    }
  }

  public get wrapS(): Wrapping | undefined {
    return this._objRef?.wrapS;
  }
  @Input()
  public set wrapT(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapT = value;
    }
  }

  public get wrapT(): Wrapping | undefined {
    return this._objRef?.wrapT;
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
  public set anisotropy(value: number) {
    if (this._objRef) {
      this._objRef.anisotropy = value;
    }
  }

  public get anisotropy(): number | undefined {
    return this._objRef?.anisotropy;
  }
  @Input()
  public set format(value: AnyPixelFormat) {
    if (this._objRef) {
      this._objRef.format = value;
    }
  }

  public get format(): AnyPixelFormat | undefined {
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
  public set internalFormat(value: PixelFormatGPU | null) {
    if (this._objRef) {
      this._objRef.internalFormat = value;
    }
  }

  public get internalFormat(): (PixelFormatGPU | null) | undefined {
    return this._objRef?.internalFormat;
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
          n33: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix3>(this._objRef.matrix, value);
    }
  }
  public get matrix(): Matrix3 | undefined {
    return this._objRef?.matrix;
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  public get matrixAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixAutoUpdate;
  }
  @Input()
  public set offset(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.offset = applyValue<Vector2>(this._objRef.offset, value);
    }
  }
  public get offset(): Vector2 | undefined {
    return this._objRef?.offset;
  }
  @Input()
  public set repeat(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.repeat = applyValue<Vector2>(this._objRef.repeat, value);
    }
  }
  public get repeat(): Vector2 | undefined {
    return this._objRef?.repeat;
  }
  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector2>(this._objRef.center, value);
    }
  }
  public get center(): Vector2 | undefined {
    return this._objRef?.center;
  }
  @Input()
  public set rotation(value: number) {
    if (this._objRef) {
      this._objRef.rotation = value;
    }
  }

  public get rotation(): number | undefined {
    return this._objRef?.rotation;
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
  public set premultiplyAlpha(value: boolean) {
    if (this._objRef) {
      this._objRef.premultiplyAlpha = value;
    }
  }

  public get premultiplyAlpha(): boolean | undefined {
    return this._objRef?.premultiplyAlpha;
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
  public set colorSpace(value: string) {
    if (this._objRef) {
      this._objRef.colorSpace = value;
    }
  }

  public get colorSpace(): string | undefined {
    return this._objRef?.colorSpace;
  }
  @Input()
  public set isRenderTargetTexture(value: boolean) {
    if (this._objRef) {
      this._objRef.isRenderTargetTexture = value;
    }
  }

  public get isRenderTargetTexture(): boolean | undefined {
    return this._objRef?.isRenderTargetTexture;
  }
  @Input()
  public set isArrayTexture(value: boolean) {
    if (this._objRef) {
      this._objRef.isArrayTexture = value;
    }
  }

  public get isArrayTexture(): boolean | undefined {
    return this._objRef?.isArrayTexture;
  }
  @Input()
  public set userData(value: Record<string, any>) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  public get userData(): Record<string, any> | undefined {
    return this._objRef?.userData;
  }
  @Input()
  public set updateRanges(value: Array<{ start: number; count: number }>) {
    if (this._objRef) {
      this._objRef.updateRanges = value;
    }
  }

  public get updateRanges():
    | Array<{ start: number; count: number }>
    | undefined {
    return this._objRef?.updateRanges;
  }
  @Input()
  public set version(value: number) {
    if (this._objRef) {
      this._objRef.version = value;
    }
  }

  public get version(): number | undefined {
    return this._objRef?.version;
  }
  @Input()
  public set pmremVersion(value: number) {
    if (this._objRef) {
      this._objRef.pmremVersion = value;
    }
  }

  public get pmremVersion(): number | undefined {
    return this._objRef?.pmremVersion;
  }
  @Input()
  public set needsUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.needsUpdate = value;
    }
  }

  @Input()
  public set needsPMREMUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.needsPMREMUpdate = value;
    }
  }

  public static readonly DEFAULT_ANISOTROPY = Texture.DEFAULT_ANISOTROPY;

  public static readonly DEFAULT_IMAGE = Texture.DEFAULT_IMAGE;

  public static readonly DEFAULT_MAPPING = Texture.DEFAULT_MAPPING;

  @Input()
  public set renderTarget(value: RenderTarget | null) {
    if (this._objRef) {
      this._objRef.renderTarget = value;
    }
  }

  public get renderTarget(): (RenderTarget | null) | undefined {
    return this._objRef?.renderTarget;
  }
}
