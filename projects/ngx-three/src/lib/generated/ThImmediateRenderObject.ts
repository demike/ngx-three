/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ImmediateRenderObject, Material } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-immediateRenderObject',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThImmediateRenderObject),
    },
  ],
})
export class ThImmediateRenderObject<
  TARGS extends any[] = [material: Material]
> extends ThObject3D<TARGS> {
  @Input()
  public obj!: ImmediateRenderObject;
  protected getType(): Type<ImmediateRenderObject> {
    return ImmediateRenderObject;
  }

  @Input()
  public set material(value: Material) {
    if (this.obj) {
      this.obj.material = value;
    }
  }

  @Input()
  public set hasPositions(value: boolean) {
    if (this.obj) {
      this.obj.hasPositions = value;
    }
  }

  @Input()
  public set hasNormals(value: boolean) {
    if (this.obj) {
      this.obj.hasNormals = value;
    }
  }

  @Input()
  public set hasColors(value: boolean) {
    if (this.obj) {
      this.obj.hasColors = value;
    }
  }

  @Input()
  public set hasUvs(value: boolean) {
    if (this.obj) {
      this.obj.hasUvs = value;
    }
  }

  @Input()
  public set positionArray(value: null | Float32Array) {
    if (this.obj) {
      this.obj.positionArray = value;
    }
  }

  @Input()
  public set normalArray(value: null | Float32Array) {
    if (this.obj) {
      this.obj.normalArray = value;
    }
  }

  @Input()
  public set colorArray(value: null | Float32Array) {
    if (this.obj) {
      this.obj.colorArray = value;
    }
  }

  @Input()
  public set uvArray(value: null | Float32Array) {
    if (this.obj) {
      this.obj.uvArray = value;
    }
  }

  @Input()
  public set count(value: number) {
    if (this.obj) {
      this.obj.count = value;
    }
  }
}
