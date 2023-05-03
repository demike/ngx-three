/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, Input, SkipSelf, Type } from '@angular/core';
import {
  Blending,
  BlendingDstFactor,
  BlendingEquation,
  BlendingSrcFactor,
  DepthModes,
  Material,
  Side,
  StencilFunc,
  StencilOp
} from 'three';
import { ThMaterialBase } from '../ThMaterialBase';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-material',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ThMaterial<T extends Material = Material, TARGS = []> extends ThMaterialBase<T, TARGS> {
  public getType(): Type<Material> {
    return Material;
  }

  @Input()
  public set alphaTest(value: number) {
    if (this._objRef) {
      this._objRef.alphaTest = value;
    }
  }

  // @ts-ignore
  public get alphaTest(): number | undefined {
    return this._objRef?.alphaTest;
  }
  @Input()
  public set alphaToCoverage(value: boolean) {
    if (this._objRef) {
      this._objRef.alphaToCoverage = value;
    }
  }

  // @ts-ignore
  public get alphaToCoverage(): boolean | undefined {
    return this._objRef?.alphaToCoverage;
  }
  @Input()
  public set blendDst(value: BlendingDstFactor) {
    if (this._objRef) {
      this._objRef.blendDst = value;
    }
  }

  // @ts-ignore
  public get blendDst(): BlendingDstFactor | undefined {
    return this._objRef?.blendDst;
  }
  @Input()
  public set blendDstAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendDstAlpha = value;
    }
  }

  // @ts-ignore
  public get blendDstAlpha(): (number | null) | undefined {
    return this._objRef?.blendDstAlpha;
  }
  @Input()
  public set blendEquation(value: BlendingEquation) {
    if (this._objRef) {
      this._objRef.blendEquation = value;
    }
  }

  // @ts-ignore
  public get blendEquation(): BlendingEquation | undefined {
    return this._objRef?.blendEquation;
  }
  @Input()
  public set blendEquationAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendEquationAlpha = value;
    }
  }

  // @ts-ignore
  public get blendEquationAlpha(): (number | null) | undefined {
    return this._objRef?.blendEquationAlpha;
  }
  @Input()
  public set blending(value: Blending) {
    if (this._objRef) {
      this._objRef.blending = value;
    }
  }

  // @ts-ignore
  public get blending(): Blending | undefined {
    return this._objRef?.blending;
  }
  @Input()
  public set blendSrc(value: BlendingSrcFactor | BlendingDstFactor) {
    if (this._objRef) {
      this._objRef.blendSrc = value;
    }
  }

  // @ts-ignore
  public get blendSrc(): (BlendingSrcFactor | BlendingDstFactor) | undefined {
    return this._objRef?.blendSrc;
  }
  @Input()
  public set blendSrcAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendSrcAlpha = value;
    }
  }

  // @ts-ignore
  public get blendSrcAlpha(): (number | null) | undefined {
    return this._objRef?.blendSrcAlpha;
  }
  @Input()
  public set clipIntersection(value: boolean) {
    if (this._objRef) {
      this._objRef.clipIntersection = value;
    }
  }

  // @ts-ignore
  public get clipIntersection(): boolean | undefined {
    return this._objRef?.clipIntersection;
  }
  @Input()
  public set clippingPlanes(value: any) {
    if (this._objRef) {
      this._objRef.clippingPlanes = value;
    }
  }

  // @ts-ignore
  public get clippingPlanes(): any | undefined {
    return this._objRef?.clippingPlanes;
  }
  @Input()
  public set clipShadows(value: boolean) {
    if (this._objRef) {
      this._objRef.clipShadows = value;
    }
  }

  // @ts-ignore
  public get clipShadows(): boolean | undefined {
    return this._objRef?.clipShadows;
  }
  @Input()
  public set colorWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.colorWrite = value;
    }
  }

  // @ts-ignore
  public get colorWrite(): boolean | undefined {
    return this._objRef?.colorWrite;
  }
  @Input()
  public set defines(value: undefined | { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  // @ts-ignore
  public get defines(): (undefined | { [key: string]: any }) | undefined {
    return this._objRef?.defines;
  }
  @Input()
  public set depthFunc(value: DepthModes) {
    if (this._objRef) {
      this._objRef.depthFunc = value;
    }
  }

  // @ts-ignore
  public get depthFunc(): DepthModes | undefined {
    return this._objRef?.depthFunc;
  }
  @Input()
  public set depthTest(value: boolean) {
    if (this._objRef) {
      this._objRef.depthTest = value;
    }
  }

  // @ts-ignore
  public get depthTest(): boolean | undefined {
    return this._objRef?.depthTest;
  }
  @Input()
  public set depthWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.depthWrite = value;
    }
  }

  // @ts-ignore
  public get depthWrite(): boolean | undefined {
    return this._objRef?.depthWrite;
  }
  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  // @ts-ignore
  public get id(): number | undefined {
    return this._objRef?.id;
  }
  @Input()
  public set stencilWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.stencilWrite = value;
    }
  }

  // @ts-ignore
  public get stencilWrite(): boolean | undefined {
    return this._objRef?.stencilWrite;
  }
  @Input()
  public set stencilFunc(value: StencilFunc) {
    if (this._objRef) {
      this._objRef.stencilFunc = value;
    }
  }

  // @ts-ignore
  public get stencilFunc(): StencilFunc | undefined {
    return this._objRef?.stencilFunc;
  }
  @Input()
  public set stencilRef(value: number) {
    if (this._objRef) {
      this._objRef.stencilRef = value;
    }
  }

  // @ts-ignore
  public get stencilRef(): number | undefined {
    return this._objRef?.stencilRef;
  }
  @Input()
  public set stencilWriteMask(value: number) {
    if (this._objRef) {
      this._objRef.stencilWriteMask = value;
    }
  }

  // @ts-ignore
  public get stencilWriteMask(): number | undefined {
    return this._objRef?.stencilWriteMask;
  }
  @Input()
  public set stencilFuncMask(value: number) {
    if (this._objRef) {
      this._objRef.stencilFuncMask = value;
    }
  }

  // @ts-ignore
  public get stencilFuncMask(): number | undefined {
    return this._objRef?.stencilFuncMask;
  }
  @Input()
  public set stencilFail(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilFail = value;
    }
  }

  // @ts-ignore
  public get stencilFail(): StencilOp | undefined {
    return this._objRef?.stencilFail;
  }
  @Input()
  public set stencilZFail(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilZFail = value;
    }
  }

  // @ts-ignore
  public get stencilZFail(): StencilOp | undefined {
    return this._objRef?.stencilZFail;
  }
  @Input()
  public set stencilZPass(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilZPass = value;
    }
  }

  // @ts-ignore
  public get stencilZPass(): StencilOp | undefined {
    return this._objRef?.stencilZPass;
  }
  // @ts-ignore
  public get isMaterial(): true | undefined {
    return this._objRef?.isMaterial;
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
  public set needsUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.needsUpdate = value;
    }
  }

  // @ts-ignore
  public get needsUpdate(): boolean | undefined {
    return this._objRef?.needsUpdate;
  }
  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  // @ts-ignore
  public get opacity(): number | undefined {
    return this._objRef?.opacity;
  }
  @Input()
  public set polygonOffset(value: boolean) {
    if (this._objRef) {
      this._objRef.polygonOffset = value;
    }
  }

  // @ts-ignore
  public get polygonOffset(): boolean | undefined {
    return this._objRef?.polygonOffset;
  }
  @Input()
  public set polygonOffsetFactor(value: number) {
    if (this._objRef) {
      this._objRef.polygonOffsetFactor = value;
    }
  }

  // @ts-ignore
  public get polygonOffsetFactor(): number | undefined {
    return this._objRef?.polygonOffsetFactor;
  }
  @Input()
  public set polygonOffsetUnits(value: number) {
    if (this._objRef) {
      this._objRef.polygonOffsetUnits = value;
    }
  }

  // @ts-ignore
  public get polygonOffsetUnits(): number | undefined {
    return this._objRef?.polygonOffsetUnits;
  }
  @Input()
  public set precision(value: 'highp' | 'mediump' | 'lowp' | null) {
    if (this._objRef) {
      this._objRef.precision = value;
    }
  }

  // @ts-ignore
  public get precision(): ('highp' | 'mediump' | 'lowp' | null) | undefined {
    return this._objRef?.precision;
  }
  @Input()
  public set premultipliedAlpha(value: boolean) {
    if (this._objRef) {
      this._objRef.premultipliedAlpha = value;
    }
  }

  // @ts-ignore
  public get premultipliedAlpha(): boolean | undefined {
    return this._objRef?.premultipliedAlpha;
  }
  @Input()
  public set forceSinglePass(value: boolean) {
    if (this._objRef) {
      this._objRef.forceSinglePass = value;
    }
  }

  // @ts-ignore
  public get forceSinglePass(): boolean | undefined {
    return this._objRef?.forceSinglePass;
  }
  @Input()
  public set dithering(value: boolean) {
    if (this._objRef) {
      this._objRef.dithering = value;
    }
  }

  // @ts-ignore
  public get dithering(): boolean | undefined {
    return this._objRef?.dithering;
  }
  @Input()
  public set side(value: Side) {
    if (this._objRef) {
      this._objRef.side = value;
    }
  }

  // @ts-ignore
  public get side(): Side | undefined {
    return this._objRef?.side;
  }
  @Input()
  public set shadowSide(value: Side | null) {
    if (this._objRef) {
      this._objRef.shadowSide = value;
    }
  }

  // @ts-ignore
  public get shadowSide(): (Side | null) | undefined {
    return this._objRef?.shadowSide;
  }
  @Input()
  public set toneMapped(value: boolean) {
    if (this._objRef) {
      this._objRef.toneMapped = value;
    }
  }

  // @ts-ignore
  public get toneMapped(): boolean | undefined {
    return this._objRef?.toneMapped;
  }
  @Input()
  public set transparent(value: boolean) {
    if (this._objRef) {
      this._objRef.transparent = value;
    }
  }

  // @ts-ignore
  public get transparent(): boolean | undefined {
    return this._objRef?.transparent;
  }
  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
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
  public set vertexColors(value: boolean) {
    if (this._objRef) {
      this._objRef.vertexColors = value;
    }
  }

  // @ts-ignore
  public get vertexColors(): boolean | undefined {
    return this._objRef?.vertexColors;
  }
  @Input()
  public set visible(value: boolean) {
    if (this._objRef) {
      this._objRef.visible = value;
    }
  }

  // @ts-ignore
  public get visible(): boolean | undefined {
    return this._objRef?.visible;
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

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
