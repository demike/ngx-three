/* eslint-disable @typescript-eslint/naming-convention */
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
  T extends ImmediateRenderObject = ImmediateRenderObject,
  TARGS extends any[] = [material: Material]
> extends ThObject3D<T, TARGS> {
  protected getType(): Type<ImmediateRenderObject> {
    return ImmediateRenderObject;
  }

  @Input()
  public set material(value: Material) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  @Input()
  public set hasPositions(value: boolean) {
    if (this._objRef) {
      this._objRef.hasPositions = value;
    }
  }

  @Input()
  public set hasNormals(value: boolean) {
    if (this._objRef) {
      this._objRef.hasNormals = value;
    }
  }

  @Input()
  public set hasColors(value: boolean) {
    if (this._objRef) {
      this._objRef.hasColors = value;
    }
  }

  @Input()
  public set hasUvs(value: boolean) {
    if (this._objRef) {
      this._objRef.hasUvs = value;
    }
  }

  @Input()
  public set positionArray(value: null | Float32Array) {
    if (this._objRef) {
      this._objRef.positionArray = value;
    }
  }

  @Input()
  public set normalArray(value: null | Float32Array) {
    if (this._objRef) {
      this._objRef.normalArray = value;
    }
  }

  @Input()
  public set colorArray(value: null | Float32Array) {
    if (this._objRef) {
      this._objRef.colorArray = value;
    }
  }

  @Input()
  public set uvArray(value: null | Float32Array) {
    if (this._objRef) {
      this._objRef.uvArray = value;
    }
  }

  @Input()
  public set count(value: number) {
    if (this._objRef) {
      this._objRef.count = value;
    }
  }
}
