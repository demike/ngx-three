/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SkipSelf,
  Type,
} from '@angular/core';
import { Color, ColorRepresentation, Material } from 'three';
import {
  Blending,
  BlendingDstFactor,
  BlendingEquation,
  BlendingSrcFactor,
  DepthModes,
  Side,
  StencilFunc,
  StencilOp,
} from 'three/src/constants.js';
import { Plane } from 'three/src/math/Plane.js';
import { ThMaterialBase } from '../ThMaterialBase';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-material',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThMaterial<
  T extends Material = Material,
  TARGS = [],
> extends ThMaterialBase<T, TARGS> {
  public getType(): Type<Material> {
    return Material;
  }

  public get isMaterial(): true | undefined {
    return this._objRef?.isMaterial;
  }
  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set alphaHash(value: boolean) {
    if (this._objRef) {
      this._objRef.alphaHash = value;
    }
  }

  public get alphaHash(): boolean | undefined {
    return this._objRef?.alphaHash;
  }
  @Input()
  public set alphaToCoverage(value: boolean) {
    if (this._objRef) {
      this._objRef.alphaToCoverage = value;
    }
  }

  public get alphaToCoverage(): boolean | undefined {
    return this._objRef?.alphaToCoverage;
  }
  @Input()
  public set blendAlpha(value: number) {
    if (this._objRef) {
      this._objRef.blendAlpha = value;
    }
  }

  public get blendAlpha(): number | undefined {
    return this._objRef?.blendAlpha;
  }
  @Input()
  public set blendColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.blendColor = applyValue<Color>(
        this._objRef.blendColor,
        value,
      );
    }
  }
  public get blendColor(): Color | undefined {
    return this._objRef?.blendColor;
  }
  @Input()
  public set blendDst(value: BlendingDstFactor) {
    if (this._objRef) {
      this._objRef.blendDst = value;
    }
  }

  public get blendDst(): BlendingDstFactor | undefined {
    return this._objRef?.blendDst;
  }
  @Input()
  public set blendDstAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendDstAlpha = value;
    }
  }

  public get blendDstAlpha(): (number | null) | undefined {
    return this._objRef?.blendDstAlpha;
  }
  @Input()
  public set blendEquation(value: BlendingEquation) {
    if (this._objRef) {
      this._objRef.blendEquation = value;
    }
  }

  public get blendEquation(): BlendingEquation | undefined {
    return this._objRef?.blendEquation;
  }
  @Input()
  public set blendEquationAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendEquationAlpha = value;
    }
  }

  public get blendEquationAlpha(): (number | null) | undefined {
    return this._objRef?.blendEquationAlpha;
  }
  @Input()
  public set blending(value: Blending) {
    if (this._objRef) {
      this._objRef.blending = value;
    }
  }

  public get blending(): Blending | undefined {
    return this._objRef?.blending;
  }
  @Input()
  public set blendSrc(value: BlendingSrcFactor | BlendingDstFactor) {
    if (this._objRef) {
      this._objRef.blendSrc = value;
    }
  }

  public get blendSrc(): (BlendingSrcFactor | BlendingDstFactor) | undefined {
    return this._objRef?.blendSrc;
  }
  @Input()
  public set blendSrcAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendSrcAlpha = value;
    }
  }

  public get blendSrcAlpha(): (number | null) | undefined {
    return this._objRef?.blendSrcAlpha;
  }
  @Input()
  public set clipIntersection(value: boolean) {
    if (this._objRef) {
      this._objRef.clipIntersection = value;
    }
  }

  public get clipIntersection(): boolean | undefined {
    return this._objRef?.clipIntersection;
  }
  @Input()
  public set clippingPlanes(value: Plane[] | null) {
    if (this._objRef) {
      this._objRef.clippingPlanes = value;
    }
  }

  public get clippingPlanes(): (Plane[] | null) | undefined {
    return this._objRef?.clippingPlanes;
  }
  @Input()
  public set clipShadows(value: boolean) {
    if (this._objRef) {
      this._objRef.clipShadows = value;
    }
  }

  public get clipShadows(): boolean | undefined {
    return this._objRef?.clipShadows;
  }
  @Input()
  public set colorWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.colorWrite = value;
    }
  }

  public get colorWrite(): boolean | undefined {
    return this._objRef?.colorWrite;
  }
  @Input()
  public set defines(value: undefined | { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  public get defines(): (undefined | { [key: string]: any }) | undefined {
    return this._objRef?.defines;
  }
  @Input()
  public set depthFunc(value: DepthModes) {
    if (this._objRef) {
      this._objRef.depthFunc = value;
    }
  }

  public get depthFunc(): DepthModes | undefined {
    return this._objRef?.depthFunc;
  }
  @Input()
  public set depthTest(value: boolean) {
    if (this._objRef) {
      this._objRef.depthTest = value;
    }
  }

  public get depthTest(): boolean | undefined {
    return this._objRef?.depthTest;
  }
  @Input()
  public set depthWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.depthWrite = value;
    }
  }

  public get depthWrite(): boolean | undefined {
    return this._objRef?.depthWrite;
  }
  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  public get id(): number | undefined {
    return this._objRef?.id;
  }
  @Input()
  public set stencilWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.stencilWrite = value;
    }
  }

  public get stencilWrite(): boolean | undefined {
    return this._objRef?.stencilWrite;
  }
  @Input()
  public set stencilFunc(value: StencilFunc) {
    if (this._objRef) {
      this._objRef.stencilFunc = value;
    }
  }

  public get stencilFunc(): StencilFunc | undefined {
    return this._objRef?.stencilFunc;
  }
  @Input()
  public set stencilRef(value: number) {
    if (this._objRef) {
      this._objRef.stencilRef = value;
    }
  }

  public get stencilRef(): number | undefined {
    return this._objRef?.stencilRef;
  }
  @Input()
  public set stencilWriteMask(value: number) {
    if (this._objRef) {
      this._objRef.stencilWriteMask = value;
    }
  }

  public get stencilWriteMask(): number | undefined {
    return this._objRef?.stencilWriteMask;
  }
  @Input()
  public set stencilFuncMask(value: number) {
    if (this._objRef) {
      this._objRef.stencilFuncMask = value;
    }
  }

  public get stencilFuncMask(): number | undefined {
    return this._objRef?.stencilFuncMask;
  }
  @Input()
  public set stencilFail(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilFail = value;
    }
  }

  public get stencilFail(): StencilOp | undefined {
    return this._objRef?.stencilFail;
  }
  @Input()
  public set stencilZFail(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilZFail = value;
    }
  }

  public get stencilZFail(): StencilOp | undefined {
    return this._objRef?.stencilZFail;
  }
  @Input()
  public set stencilZPass(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilZPass = value;
    }
  }

  public get stencilZPass(): StencilOp | undefined {
    return this._objRef?.stencilZPass;
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
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  public get opacity(): number | undefined {
    return this._objRef?.opacity;
  }
  @Input()
  public set polygonOffset(value: boolean) {
    if (this._objRef) {
      this._objRef.polygonOffset = value;
    }
  }

  public get polygonOffset(): boolean | undefined {
    return this._objRef?.polygonOffset;
  }
  @Input()
  public set polygonOffsetFactor(value: number) {
    if (this._objRef) {
      this._objRef.polygonOffsetFactor = value;
    }
  }

  public get polygonOffsetFactor(): number | undefined {
    return this._objRef?.polygonOffsetFactor;
  }
  @Input()
  public set polygonOffsetUnits(value: number) {
    if (this._objRef) {
      this._objRef.polygonOffsetUnits = value;
    }
  }

  public get polygonOffsetUnits(): number | undefined {
    return this._objRef?.polygonOffsetUnits;
  }
  @Input()
  public set precision(value: 'highp' | 'mediump' | 'lowp' | null) {
    if (this._objRef) {
      this._objRef.precision = value;
    }
  }

  public get precision(): ('highp' | 'mediump' | 'lowp' | null) | undefined {
    return this._objRef?.precision;
  }
  @Input()
  public set premultipliedAlpha(value: boolean) {
    if (this._objRef) {
      this._objRef.premultipliedAlpha = value;
    }
  }

  public get premultipliedAlpha(): boolean | undefined {
    return this._objRef?.premultipliedAlpha;
  }
  @Input()
  public set forceSinglePass(value: boolean) {
    if (this._objRef) {
      this._objRef.forceSinglePass = value;
    }
  }

  public get forceSinglePass(): boolean | undefined {
    return this._objRef?.forceSinglePass;
  }
  @Input()
  public set dithering(value: boolean) {
    if (this._objRef) {
      this._objRef.dithering = value;
    }
  }

  public get dithering(): boolean | undefined {
    return this._objRef?.dithering;
  }
  @Input()
  public set side(value: Side) {
    if (this._objRef) {
      this._objRef.side = value;
    }
  }

  public get side(): Side | undefined {
    return this._objRef?.side;
  }
  @Input()
  public set shadowSide(value: Side | null) {
    if (this._objRef) {
      this._objRef.shadowSide = value;
    }
  }

  public get shadowSide(): (Side | null) | undefined {
    return this._objRef?.shadowSide;
  }
  @Input()
  public set toneMapped(value: boolean) {
    if (this._objRef) {
      this._objRef.toneMapped = value;
    }
  }

  public get toneMapped(): boolean | undefined {
    return this._objRef?.toneMapped;
  }
  @Input()
  public set transparent(value: boolean) {
    if (this._objRef) {
      this._objRef.transparent = value;
    }
  }

  public get transparent(): boolean | undefined {
    return this._objRef?.transparent;
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
  public set vertexColors(value: boolean) {
    if (this._objRef) {
      this._objRef.vertexColors = value;
    }
  }

  public get vertexColors(): boolean | undefined {
    return this._objRef?.vertexColors;
  }
  @Input()
  public set visible(value: boolean) {
    if (this._objRef) {
      this._objRef.visible = value;
    }
  }

  public get visible(): boolean | undefined {
    return this._objRef?.visible;
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
  public set version(value: number) {
    if (this._objRef) {
      this._objRef.version = value;
    }
  }

  public get version(): number | undefined {
    return this._objRef?.version;
  }
  public get alphaTest(): number | undefined {
    return this._objRef?.alphaTest;
  }
  @Input()
  public set alphaTest(value: number) {
    if (this._objRef) {
      this._objRef.alphaTest = value;
    }
  }

  @Input()
  public set needsUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.needsUpdate = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
