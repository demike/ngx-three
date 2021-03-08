/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  Color,
  Combine,
  MeshBasicMaterial,
  MeshBasicMaterialParameters,
  Texture,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshBasicMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThMeshBasicMaterial) },
  ],
})
export class ThMeshBasicMaterial<
  TARGS extends any[] = [parameters?: MeshBasicMaterialParameters]
> extends ThMaterial<TARGS> {
  @Input()
  public obj!: MeshBasicMaterial;
  protected getType(): Type<MeshBasicMaterial> {
    return MeshBasicMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.color = applyValue<Color>(this.obj.color, value);
    }
  }
  @Input()
  public set map(value: Texture | null) {
    if (this.obj) {
      this.obj.map = value;
    }
  }

  @Input()
  public set aoMap(value: Texture | null) {
    if (this.obj) {
      this.obj.aoMap = value;
    }
  }

  @Input()
  public set aoMapIntensity(value: number) {
    if (this.obj) {
      this.obj.aoMapIntensity = value;
    }
  }

  @Input()
  public set specularMap(value: Texture | null) {
    if (this.obj) {
      this.obj.specularMap = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.obj) {
      this.obj.alphaMap = value;
    }
  }

  @Input()
  public set envMap(value: Texture | null) {
    if (this.obj) {
      this.obj.envMap = value;
    }
  }

  @Input()
  public set combine(value: Combine) {
    if (this.obj) {
      this.obj.combine = value;
    }
  }

  @Input()
  public set reflectivity(value: number) {
    if (this.obj) {
      this.obj.reflectivity = value;
    }
  }

  @Input()
  public set refractionRatio(value: number) {
    if (this.obj) {
      this.obj.refractionRatio = value;
    }
  }

  @Input()
  public set wireframe(value: boolean) {
    if (this.obj) {
      this.obj.wireframe = value;
    }
  }

  @Input()
  public set wireframeLinewidth(value: number) {
    if (this.obj) {
      this.obj.wireframeLinewidth = value;
    }
  }

  @Input()
  public set wireframeLinecap(value: string) {
    if (this.obj) {
      this.obj.wireframeLinecap = value;
    }
  }

  @Input()
  public set wireframeLinejoin(value: string) {
    if (this.obj) {
      this.obj.wireframeLinejoin = value;
    }
  }

  @Input()
  public set skinning(value: boolean) {
    if (this.obj) {
      this.obj.skinning = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this.obj) {
      this.obj.morphTargets = value;
    }
  }
}
