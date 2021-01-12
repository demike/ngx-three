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
  TARGS extends any[] = []
> extends ThMaterialBase<TARGS> {
  public obj!: Material;
  protected getType(): Type<Material> {
    return Material;
  }

  @Input()
  public set alphaTest(value: number) {
    if (this.obj) {
      this.obj.alphaTest = value;
    }
  }

  @Input()
  public set blendDst(value: BlendingDstFactor) {
    if (this.obj) {
      this.obj.blendDst = value;
    }
  }

  @Input()
  public set blendDstAlpha(value: number | null) {
    if (this.obj) {
      this.obj.blendDstAlpha = value;
    }
  }

  @Input()
  public set blendEquation(value: BlendingEquation) {
    if (this.obj) {
      this.obj.blendEquation = value;
    }
  }

  @Input()
  public set blendEquationAlpha(value: number | null) {
    if (this.obj) {
      this.obj.blendEquationAlpha = value;
    }
  }

  @Input()
  public set blending(value: Blending) {
    if (this.obj) {
      this.obj.blending = value;
    }
  }

  @Input()
  public set blendSrc(value: BlendingSrcFactor | BlendingDstFactor) {
    if (this.obj) {
      this.obj.blendSrc = value;
    }
  }

  @Input()
  public set blendSrcAlpha(value: number | null) {
    if (this.obj) {
      this.obj.blendSrcAlpha = value;
    }
  }

  @Input()
  public set clipIntersection(value: boolean) {
    if (this.obj) {
      this.obj.clipIntersection = value;
    }
  }

  @Input()
  public set clippingPlanes(value: any) {
    if (this.obj) {
      this.obj.clippingPlanes = value;
    }
  }

  @Input()
  public set clipShadows(value: boolean) {
    if (this.obj) {
      this.obj.clipShadows = value;
    }
  }

  @Input()
  public set colorWrite(value: boolean) {
    if (this.obj) {
      this.obj.colorWrite = value;
    }
  }

  @Input()
  public set defines(value: undefined | { [key: string]: any }) {
    if (this.obj) {
      this.obj.defines = value;
    }
  }

  @Input()
  public set depthFunc(value: DepthModes) {
    if (this.obj) {
      this.obj.depthFunc = value;
    }
  }

  @Input()
  public set depthTest(value: boolean) {
    if (this.obj) {
      this.obj.depthTest = value;
    }
  }

  @Input()
  public set depthWrite(value: boolean) {
    if (this.obj) {
      this.obj.depthWrite = value;
    }
  }

  @Input()
  public set fog(value: boolean) {
    if (this.obj) {
      this.obj.fog = value;
    }
  }

  @Input()
  public set id(value: number) {
    if (this.obj) {
      this.obj.id = value;
    }
  }

  @Input()
  public set stencilWrite(value: boolean) {
    if (this.obj) {
      this.obj.stencilWrite = value;
    }
  }

  @Input()
  public set stencilFunc(value: StencilFunc) {
    if (this.obj) {
      this.obj.stencilFunc = value;
    }
  }

  @Input()
  public set stencilRef(value: number) {
    if (this.obj) {
      this.obj.stencilRef = value;
    }
  }

  @Input()
  public set stencilWriteMask(value: number) {
    if (this.obj) {
      this.obj.stencilWriteMask = value;
    }
  }

  @Input()
  public set stencilFuncMask(value: number) {
    if (this.obj) {
      this.obj.stencilFuncMask = value;
    }
  }

  @Input()
  public set stencilFail(value: StencilOp) {
    if (this.obj) {
      this.obj.stencilFail = value;
    }
  }

  @Input()
  public set stencilZFail(value: StencilOp) {
    if (this.obj) {
      this.obj.stencilZFail = value;
    }
  }

  @Input()
  public set stencilZPass(value: StencilOp) {
    if (this.obj) {
      this.obj.stencilZPass = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.obj) {
      this.obj.name = value;
    }
  }

  @Input()
  public set needsUpdate(value: boolean) {
    if (this.obj) {
      this.obj.needsUpdate = value;
    }
  }

  @Input()
  public set opacity(value: number) {
    if (this.obj) {
      this.obj.opacity = value;
    }
  }

  @Input()
  public set polygonOffset(value: boolean) {
    if (this.obj) {
      this.obj.polygonOffset = value;
    }
  }

  @Input()
  public set polygonOffsetFactor(value: number) {
    if (this.obj) {
      this.obj.polygonOffsetFactor = value;
    }
  }

  @Input()
  public set polygonOffsetUnits(value: number) {
    if (this.obj) {
      this.obj.polygonOffsetUnits = value;
    }
  }

  @Input()
  public set precision(value: 'highp' | 'mediump' | 'lowp' | null) {
    if (this.obj) {
      this.obj.precision = value;
    }
  }

  @Input()
  public set premultipliedAlpha(value: boolean) {
    if (this.obj) {
      this.obj.premultipliedAlpha = value;
    }
  }

  @Input()
  public set dithering(value: boolean) {
    if (this.obj) {
      this.obj.dithering = value;
    }
  }

  @Input()
  public set flatShading(value: boolean) {
    if (this.obj) {
      this.obj.flatShading = value;
    }
  }

  @Input()
  public set side(value: Side) {
    if (this.obj) {
      this.obj.side = value;
    }
  }

  @Input()
  public set shadowSide(value: Side) {
    if (this.obj) {
      this.obj.shadowSide = value;
    }
  }

  @Input()
  public set toneMapped(value: boolean) {
    if (this.obj) {
      this.obj.toneMapped = value;
    }
  }

  @Input()
  public set transparent(value: boolean) {
    if (this.obj) {
      this.obj.transparent = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.obj) {
      this.obj.uuid = value;
    }
  }

  @Input()
  public set vertexColors(value: boolean) {
    if (this.obj) {
      this.obj.vertexColors = value;
    }
  }

  @Input()
  public set visible(value: boolean) {
    if (this.obj) {
      this.obj.visible = value;
    }
  }

  @Input()
  public set userData(value: any) {
    if (this.obj) {
      this.obj.userData = value;
    }
  }

  @Input()
  public set version(value: number) {
    if (this.obj) {
      this.obj.version = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
