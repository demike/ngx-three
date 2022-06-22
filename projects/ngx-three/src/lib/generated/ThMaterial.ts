/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SkipSelf,
  Type,
} from '@angular/core';
import {
  Blending,
  BlendingDstFactor,
  BlendingEquation,
  BlendingSrcFactor,
  DepthModes,
  Material,
  Side,
  StencilFunc,
  StencilOp,
} from 'three';
import { ThMaterialBase } from '../ThMaterialBase';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-material',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThMaterial<
  T extends Material = Material,
  TARGS = []
> extends ThMaterialBase<T, TARGS> {
  public getType(): Type<Material> {
    return Material;
  }

  @Input()
  public set alphaTest(value: number) {
    if (this._objRef) {
      this._objRef.alphaTest = value;
    }
  }

  @Input()
  public set alphaToCoverage(value: boolean) {
    if (this._objRef) {
      this._objRef.alphaToCoverage = value;
    }
  }

  @Input()
  public set blendDst(value: BlendingDstFactor) {
    if (this._objRef) {
      this._objRef.blendDst = value;
    }
  }

  @Input()
  public set blendDstAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendDstAlpha = value;
    }
  }

  @Input()
  public set blendEquation(value: BlendingEquation) {
    if (this._objRef) {
      this._objRef.blendEquation = value;
    }
  }

  @Input()
  public set blendEquationAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendEquationAlpha = value;
    }
  }

  @Input()
  public set blending(value: Blending) {
    if (this._objRef) {
      this._objRef.blending = value;
    }
  }

  @Input()
  public set blendSrc(value: BlendingSrcFactor | BlendingDstFactor) {
    if (this._objRef) {
      this._objRef.blendSrc = value;
    }
  }

  @Input()
  public set blendSrcAlpha(value: number | null) {
    if (this._objRef) {
      this._objRef.blendSrcAlpha = value;
    }
  }

  @Input()
  public set clipIntersection(value: boolean) {
    if (this._objRef) {
      this._objRef.clipIntersection = value;
    }
  }

  @Input()
  public set clippingPlanes(value: any) {
    if (this._objRef) {
      this._objRef.clippingPlanes = value;
    }
  }

  @Input()
  public set clipShadows(value: boolean) {
    if (this._objRef) {
      this._objRef.clipShadows = value;
    }
  }

  @Input()
  public set colorWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.colorWrite = value;
    }
  }

  @Input()
  public set defines(value: undefined | { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  @Input()
  public set depthFunc(value: DepthModes) {
    if (this._objRef) {
      this._objRef.depthFunc = value;
    }
  }

  @Input()
  public set depthTest(value: boolean) {
    if (this._objRef) {
      this._objRef.depthTest = value;
    }
  }

  @Input()
  public set depthWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.depthWrite = value;
    }
  }

  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  @Input()
  public set stencilWrite(value: boolean) {
    if (this._objRef) {
      this._objRef.stencilWrite = value;
    }
  }

  @Input()
  public set stencilFunc(value: StencilFunc) {
    if (this._objRef) {
      this._objRef.stencilFunc = value;
    }
  }

  @Input()
  public set stencilRef(value: number) {
    if (this._objRef) {
      this._objRef.stencilRef = value;
    }
  }

  @Input()
  public set stencilWriteMask(value: number) {
    if (this._objRef) {
      this._objRef.stencilWriteMask = value;
    }
  }

  @Input()
  public set stencilFuncMask(value: number) {
    if (this._objRef) {
      this._objRef.stencilFuncMask = value;
    }
  }

  @Input()
  public set stencilFail(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilFail = value;
    }
  }

  @Input()
  public set stencilZFail(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilZFail = value;
    }
  }

  @Input()
  public set stencilZPass(value: StencilOp) {
    if (this._objRef) {
      this._objRef.stencilZPass = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  @Input()
  public set needsUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.needsUpdate = value;
    }
  }

  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  @Input()
  public set polygonOffset(value: boolean) {
    if (this._objRef) {
      this._objRef.polygonOffset = value;
    }
  }

  @Input()
  public set polygonOffsetFactor(value: number) {
    if (this._objRef) {
      this._objRef.polygonOffsetFactor = value;
    }
  }

  @Input()
  public set polygonOffsetUnits(value: number) {
    if (this._objRef) {
      this._objRef.polygonOffsetUnits = value;
    }
  }

  @Input()
  public set precision(value: 'highp' | 'mediump' | 'lowp' | null) {
    if (this._objRef) {
      this._objRef.precision = value;
    }
  }

  @Input()
  public set premultipliedAlpha(value: boolean) {
    if (this._objRef) {
      this._objRef.premultipliedAlpha = value;
    }
  }

  @Input()
  public set dithering(value: boolean) {
    if (this._objRef) {
      this._objRef.dithering = value;
    }
  }

  @Input()
  public set side(value: Side) {
    if (this._objRef) {
      this._objRef.side = value;
    }
  }

  @Input()
  public set shadowSide(value: Side | null) {
    if (this._objRef) {
      this._objRef.shadowSide = value;
    }
  }

  @Input()
  public set toneMapped(value: boolean) {
    if (this._objRef) {
      this._objRef.toneMapped = value;
    }
  }

  @Input()
  public set transparent(value: boolean) {
    if (this._objRef) {
      this._objRef.transparent = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  @Input()
  public set vertexColors(value: boolean) {
    if (this._objRef) {
      this._objRef.vertexColors = value;
    }
  }

  @Input()
  public set visible(value: boolean) {
    if (this._objRef) {
      this._objRef.visible = value;
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

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
