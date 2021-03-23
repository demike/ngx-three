/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, Combine, MeshBasicMaterial, MeshBasicMaterialParameters, Texture } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshBasicMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThMeshBasicMaterial) }]
})
export class ThMeshBasicMaterial<TARGS extends any[] = [parameters?: MeshBasicMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public objRef!: MeshBasicMaterial;
  protected getType(): Type<MeshBasicMaterial> {
    return MeshBasicMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.objRef) {
      this.objRef.color = applyValue<Color>(this.objRef.color, value);
    }
  }
  @Input()
  public set map(value: Texture | null) {
    if (this.objRef) {
      this.objRef.map = value;
    }
  }

  @Input()
  public set aoMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.aoMap = value;
    }
  }

  @Input()
  public set aoMapIntensity(value: number) {
    if (this.objRef) {
      this.objRef.aoMapIntensity = value;
    }
  }

  @Input()
  public set specularMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.specularMap = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.alphaMap = value;
    }
  }

  @Input()
  public set envMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.envMap = value;
    }
  }

  @Input()
  public set combine(value: Combine) {
    if (this.objRef) {
      this.objRef.combine = value;
    }
  }

  @Input()
  public set reflectivity(value: number) {
    if (this.objRef) {
      this.objRef.reflectivity = value;
    }
  }

  @Input()
  public set refractionRatio(value: number) {
    if (this.objRef) {
      this.objRef.refractionRatio = value;
    }
  }

  @Input()
  public set wireframe(value: boolean) {
    if (this.objRef) {
      this.objRef.wireframe = value;
    }
  }

  @Input()
  public set wireframeLinewidth(value: number) {
    if (this.objRef) {
      this.objRef.wireframeLinewidth = value;
    }
  }

  @Input()
  public set wireframeLinecap(value: string) {
    if (this.objRef) {
      this.objRef.wireframeLinecap = value;
    }
  }

  @Input()
  public set wireframeLinejoin(value: string) {
    if (this.objRef) {
      this.objRef.wireframeLinejoin = value;
    }
  }

  @Input()
  public set skinning(value: boolean) {
    if (this.objRef) {
      this.objRef.skinning = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this.objRef) {
      this.objRef.morphTargets = value;
    }
  }
}
