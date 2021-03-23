/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { ImmediateRenderObject, Material } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-immediateRenderObject',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThImmediateRenderObject)
    }
  ]
})
export class ThImmediateRenderObject<TARGS extends any[] = [material: Material]> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: ImmediateRenderObject;
  protected getType(): Type<ImmediateRenderObject> {
    return ImmediateRenderObject;
  }

  @Input()
  public set material(value: Material) {
    if (this.objRef) {
      this.objRef.material = value;
    }
  }

  @Input()
  public set hasPositions(value: boolean) {
    if (this.objRef) {
      this.objRef.hasPositions = value;
    }
  }

  @Input()
  public set hasNormals(value: boolean) {
    if (this.objRef) {
      this.objRef.hasNormals = value;
    }
  }

  @Input()
  public set hasColors(value: boolean) {
    if (this.objRef) {
      this.objRef.hasColors = value;
    }
  }

  @Input()
  public set hasUvs(value: boolean) {
    if (this.objRef) {
      this.objRef.hasUvs = value;
    }
  }

  @Input()
  public set positionArray(value: null | Float32Array) {
    if (this.objRef) {
      this.objRef.positionArray = value;
    }
  }

  @Input()
  public set normalArray(value: null | Float32Array) {
    if (this.objRef) {
      this.objRef.normalArray = value;
    }
  }

  @Input()
  public set colorArray(value: null | Float32Array) {
    if (this.objRef) {
      this.objRef.colorArray = value;
    }
  }

  @Input()
  public set uvArray(value: null | Float32Array) {
    if (this.objRef) {
      this.objRef.uvArray = value;
    }
  }

  @Input()
  public set count(value: number) {
    if (this.objRef) {
      this.objRef.count = value;
    }
  }
}
