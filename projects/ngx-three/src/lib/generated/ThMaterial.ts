/* eslint-disable @typescript-eslint/naming-convention */
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
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ThMaterial<TARGS extends any[] = []> extends ThMaterialBase<TARGS> {
  @Input()
  public objRef!: Material;
  protected getType(): Type<Material> {
    return Material;
  }

  @Input()
  public set alphaTest(value: number) {
    if (this.objRef) {
      this.objRef.alphaTest = value;
    }
  }

  @Input()
  public set blendDst(value: BlendingDstFactor) {
    if (this.objRef) {
      this.objRef.blendDst = value;
    }
  }

  @Input()
  public set blendDstAlpha(value: number | null) {
    if (this.objRef) {
      this.objRef.blendDstAlpha = value;
    }
  }

  @Input()
  public set blendEquation(value: BlendingEquation) {
    if (this.objRef) {
      this.objRef.blendEquation = value;
    }
  }

  @Input()
  public set blendEquationAlpha(value: number | null) {
    if (this.objRef) {
      this.objRef.blendEquationAlpha = value;
    }
  }

  @Input()
  public set blending(value: Blending) {
    if (this.objRef) {
      this.objRef.blending = value;
    }
  }

  @Input()
  public set blendSrc(value: BlendingSrcFactor | BlendingDstFactor) {
    if (this.objRef) {
      this.objRef.blendSrc = value;
    }
  }

  @Input()
  public set blendSrcAlpha(value: number | null) {
    if (this.objRef) {
      this.objRef.blendSrcAlpha = value;
    }
  }

  @Input()
  public set clipIntersection(value: boolean) {
    if (this.objRef) {
      this.objRef.clipIntersection = value;
    }
  }

  @Input()
  public set clippingPlanes(value: any) {
    if (this.objRef) {
      this.objRef.clippingPlanes = value;
    }
  }

  @Input()
  public set clipShadows(value: boolean) {
    if (this.objRef) {
      this.objRef.clipShadows = value;
    }
  }

  @Input()
  public set colorWrite(value: boolean) {
    if (this.objRef) {
      this.objRef.colorWrite = value;
    }
  }

  @Input()
  public set defines(value: undefined | { [key: string]: any }) {
    if (this.objRef) {
      this.objRef.defines = value;
    }
  }

  @Input()
  public set depthFunc(value: DepthModes) {
    if (this.objRef) {
      this.objRef.depthFunc = value;
    }
  }

  @Input()
  public set depthTest(value: boolean) {
    if (this.objRef) {
      this.objRef.depthTest = value;
    }
  }

  @Input()
  public set depthWrite(value: boolean) {
    if (this.objRef) {
      this.objRef.depthWrite = value;
    }
  }

  @Input()
  public set fog(value: boolean) {
    if (this.objRef) {
      this.objRef.fog = value;
    }
  }

  @Input()
  public set id(value: number) {
    if (this.objRef) {
      this.objRef.id = value;
    }
  }

  @Input()
  public set stencilWrite(value: boolean) {
    if (this.objRef) {
      this.objRef.stencilWrite = value;
    }
  }

  @Input()
  public set stencilFunc(value: StencilFunc) {
    if (this.objRef) {
      this.objRef.stencilFunc = value;
    }
  }

  @Input()
  public set stencilRef(value: number) {
    if (this.objRef) {
      this.objRef.stencilRef = value;
    }
  }

  @Input()
  public set stencilWriteMask(value: number) {
    if (this.objRef) {
      this.objRef.stencilWriteMask = value;
    }
  }

  @Input()
  public set stencilFuncMask(value: number) {
    if (this.objRef) {
      this.objRef.stencilFuncMask = value;
    }
  }

  @Input()
  public set stencilFail(value: StencilOp) {
    if (this.objRef) {
      this.objRef.stencilFail = value;
    }
  }

  @Input()
  public set stencilZFail(value: StencilOp) {
    if (this.objRef) {
      this.objRef.stencilZFail = value;
    }
  }

  @Input()
  public set stencilZPass(value: StencilOp) {
    if (this.objRef) {
      this.objRef.stencilZPass = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.objRef) {
      this.objRef.name = value;
    }
  }

  @Input()
  public set needsUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.needsUpdate = value;
    }
  }

  @Input()
  public set opacity(value: number) {
    if (this.objRef) {
      this.objRef.opacity = value;
    }
  }

  @Input()
  public set polygonOffset(value: boolean) {
    if (this.objRef) {
      this.objRef.polygonOffset = value;
    }
  }

  @Input()
  public set polygonOffsetFactor(value: number) {
    if (this.objRef) {
      this.objRef.polygonOffsetFactor = value;
    }
  }

  @Input()
  public set polygonOffsetUnits(value: number) {
    if (this.objRef) {
      this.objRef.polygonOffsetUnits = value;
    }
  }

  @Input()
  public set precision(value: 'highp' | 'mediump' | 'lowp' | null) {
    if (this.objRef) {
      this.objRef.precision = value;
    }
  }

  @Input()
  public set premultipliedAlpha(value: boolean) {
    if (this.objRef) {
      this.objRef.premultipliedAlpha = value;
    }
  }

  @Input()
  public set dithering(value: boolean) {
    if (this.objRef) {
      this.objRef.dithering = value;
    }
  }

  @Input()
  public set flatShading(value: boolean) {
    if (this.objRef) {
      this.objRef.flatShading = value;
    }
  }

  @Input()
  public set side(value: Side) {
    if (this.objRef) {
      this.objRef.side = value;
    }
  }

  @Input()
  public set shadowSide(value: Side) {
    if (this.objRef) {
      this.objRef.shadowSide = value;
    }
  }

  @Input()
  public set toneMapped(value: boolean) {
    if (this.objRef) {
      this.objRef.toneMapped = value;
    }
  }

  @Input()
  public set transparent(value: boolean) {
    if (this.objRef) {
      this.objRef.transparent = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.objRef) {
      this.objRef.uuid = value;
    }
  }

  @Input()
  public set vertexColors(value: boolean) {
    if (this.objRef) {
      this.objRef.vertexColors = value;
    }
  }

  @Input()
  public set visible(value: boolean) {
    if (this.objRef) {
      this.objRef.visible = value;
    }
  }

  @Input()
  public set userData(value: any) {
    if (this.objRef) {
      this.objRef.userData = value;
    }
  }

  @Input()
  public set version(value: number) {
    if (this.objRef) {
      this.objRef.version = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
