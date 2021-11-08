/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  BufferGeometry,
  InstancedBufferAttribute,
  InstancedMesh,
  Material,
} from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-instancedMesh',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
  ],
})
export class ThInstancedMesh<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends InstancedMesh<TGeometry, TMaterial> = InstancedMesh<
    TGeometry,
    TMaterial
  >,
  TARGS extends any[] = [
    geometry: TGeometry | undefined,
    material: TMaterial | undefined,
    count: number
  ]
> extends ThMesh<TGeometry, TMaterial, T, TARGS> {
  public getType(): Type<InstancedMesh<TGeometry, TMaterial>> {
    return InstancedMesh;
  }

  @Input()
  public set count(value: number) {
    if (this._objRef) {
      this._objRef.count = value;
    }
  }

  @Input()
  public set instanceColor(
    value:
      | null
      | InstancedBufferAttribute
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number]
  ) {
    if (this._objRef) {
      this._objRef.instanceColor = applyValue<null | InstancedBufferAttribute>(
        this._objRef.instanceColor,
        value
      );
    }
  }
  @Input()
  public set instanceMatrix(
    value:
      | InstancedBufferAttribute
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number]
  ) {
    if (this._objRef) {
      this._objRef.instanceMatrix = applyValue<InstancedBufferAttribute>(
        this._objRef.instanceMatrix,
        value
      );
    }
  }
}
