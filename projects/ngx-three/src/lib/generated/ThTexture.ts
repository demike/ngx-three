/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  AnyMapping,
  AnyPixelFormat,
  ColorSpace,
  MagnificationTextureFilter,
  Mapping,
  Matrix3,
  MinificationTextureFilter,
  OffscreenCanvas,
  PixelFormat,
  PixelFormatGPU,
  Source,
  Texture,
  TextureDataType,
  TextureEncoding,
  Vector2,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-texture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        encoding: TextureEncoding,
      ],
> extends ThTextureBase<T, TARGS> {
  public getType(): Type<Texture> {
    return Texture;
  }

  // @ts-ignore
  public get isTexture(): true | undefined {
    return this._objRef?.isTexture;
  }
  // @ts-ignore
  public get id(): number | undefined {
    return this._objRef?.id;
  }
  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  // @ts-ignore
  public get uuid(): string | undefined {
    return this._objRef?.uuid;
  }
  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  // @ts-ignore
  public get name(): string | undefined {
    return this._objRef?.name;
  }
  @Input()
  public set source(value: Source) {
    if (this._objRef) {
      this._objRef.source = value;
    }
  }

  // @ts-ignore
  public get source(): Source | undefined {
    return this._objRef?.source;
  }
  @Input()
  public set mipmaps(value: any[]) {
    if (this._objRef) {
      this._objRef.mipmaps = value;
    }
  }

  // @ts-ignore
  public get mipmaps(): any[] | undefined {
    return this._objRef?.mipmaps;
  }
  @Input()
  public set mapping(value: AnyMapping) {
    if (this._objRef) {
      this._objRef.mapping = value;
    }
  }

  // @ts-ignore
  public get mapping(): AnyMapping | undefined {
    return this._objRef?.mapping;
  }
  @Input()
  public set channel(value: number) {
    if (this._objRef) {
      this._objRef.channel = value;
    }
  }

  // @ts-ignore
  public get channel(): number | undefined {
    return this._objRef?.channel;
  }
  @Input()
  public set wrapS(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapS = value;
    }
  }

  // @ts-ignore
  public get wrapS(): Wrapping | undefined {
    return this._objRef?.wrapS;
  }
  @Input()
  public set wrapT(value: Wrapping) {
    if (this._objRef) {
      this._objRef.wrapT = value;
    }
  }

  // @ts-ignore
  public get wrapT(): Wrapping | undefined {
    return this._objRef?.wrapT;
  }
  @Input()
  public set magFilter(value: MagnificationTextureFilter) {
    if (this._objRef) {
      this._objRef.magFilter = value;
    }
  }

  // @ts-ignore
  public get magFilter(): MagnificationTextureFilter | undefined {
    return this._objRef?.magFilter;
  }
  @Input()
  public set minFilter(value: MinificationTextureFilter) {
    if (this._objRef) {
      this._objRef.minFilter = value;
    }
  }

  // @ts-ignore
  public get minFilter(): MinificationTextureFilter | undefined {
    return this._objRef?.minFilter;
  }
  @Input()
  public set anisotropy(value: number) {
    if (this._objRef) {
      this._objRef.anisotropy = value;
    }
  }

  // @ts-ignore
  public get anisotropy(): number | undefined {
    return this._objRef?.anisotropy;
  }
  @Input()
  public set format(value: AnyPixelFormat) {
    if (this._objRef) {
      this._objRef.format = value;
    }
  }

  // @ts-ignore
  public get format(): AnyPixelFormat | undefined {
    return this._objRef?.format;
  }
  @Input()
  public set type(value: TextureDataType) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): TextureDataType | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set internalFormat(value: PixelFormatGPU | null) {
    if (this._objRef) {
      this._objRef.internalFormat = value;
    }
  }

  // @ts-ignore
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
  // @ts-ignore
  public get matrix(): Matrix3 | undefined {
    return this._objRef?.matrix;
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  // @ts-ignore
  public get matrixAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixAutoUpdate;
  }
  @Input()
  public set offset(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.offset = applyValue<Vector2>(this._objRef.offset, value);
    }
  }
  // @ts-ignore
  public get offset(): Vector2 | undefined {
    return this._objRef?.offset;
  }
  @Input()
  public set repeat(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.repeat = applyValue<Vector2>(this._objRef.repeat, value);
    }
  }
  // @ts-ignore
  public get repeat(): Vector2 | undefined {
    return this._objRef?.repeat;
  }
  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector2>(this._objRef.center, value);
    }
  }
  // @ts-ignore
  public get center(): Vector2 | undefined {
    return this._objRef?.center;
  }
  @Input()
  public set rotation(value: number) {
    if (this._objRef) {
      this._objRef.rotation = value;
    }
  }

  // @ts-ignore
  public get rotation(): number | undefined {
    return this._objRef?.rotation;
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
  public set premultiplyAlpha(value: boolean) {
    if (this._objRef) {
      this._objRef.premultiplyAlpha = value;
    }
  }

  // @ts-ignore
  public get premultiplyAlpha(): boolean | undefined {
    return this._objRef?.premultiplyAlpha;
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
  public set encoding(value: TextureEncoding) {
    if (this._objRef) {
      this._objRef.encoding = value;
    }
  }

  // @ts-ignore
  public get encoding(): TextureEncoding | undefined {
    return this._objRef?.encoding;
  }
  @Input()
  public set colorSpace(value: ColorSpace) {
    if (this._objRef) {
      this._objRef.colorSpace = value;
    }
  }

  // @ts-ignore
  public get colorSpace(): ColorSpace | undefined {
    return this._objRef?.colorSpace;
  }
  @Input()
  public set isRenderTargetTexture(value: boolean) {
    if (this._objRef) {
      this._objRef.isRenderTargetTexture = value;
    }
  }

  // @ts-ignore
  public get isRenderTargetTexture(): boolean | undefined {
    return this._objRef?.isRenderTargetTexture;
  }
  @Input()
  public set needsPMREMUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.needsPMREMUpdate = value;
    }
  }

  // @ts-ignore
  public get needsPMREMUpdate(): boolean | undefined {
    return this._objRef?.needsPMREMUpdate;
  }
  @Input()
  public set userData(value: any) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  // @ts-ignore
  public get userData(): any | undefined {
    return this._objRef?.userData;
  }
  @Input()
  public set version(value: number) {
    if (this._objRef) {
      this._objRef.version = value;
    }
  }

  // @ts-ignore
  public get version(): number | undefined {
    return this._objRef?.version;
  }

  public static readonly DEFAULT_ANISOTROPY = Texture.DEFAULT_ANISOTROPY;

  public static readonly DEFAULT_IMAGE = Texture.DEFAULT_IMAGE;

  public static readonly DEFAULT_MAPPING = Texture.DEFAULT_MAPPING;
}
