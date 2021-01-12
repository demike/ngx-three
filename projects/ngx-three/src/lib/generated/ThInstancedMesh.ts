import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  BufferAttribute,
  BufferGeometry,
  Geometry,
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
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [
    geometry: TGeometry,
    material: TMaterial,
    count: number
  ]
> extends ThMesh<TGeometry, TMaterial, TARGS> {
  public obj!: InstancedMesh<TGeometry, TMaterial>;
  protected getType(): Type<InstancedMesh<TGeometry, TMaterial>> {
    return InstancedMesh;
  }

  @Input()
  public set count(value: number) {
    if (this.obj) {
      this.obj.count = value;
    }
  }

  @Input()
  public set instanceColor(
    value:
      | null
      | BufferAttribute
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number]
  ) {
    if (this.obj) {
      this.obj.instanceColor = applyValue<null | BufferAttribute>(
        this.obj.instanceColor,
        value
      );
    }
  }
  @Input()
  public set instanceMatrix(
    value:
      | BufferAttribute
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number]
  ) {
    if (this.obj) {
      this.obj.instanceMatrix = applyValue<BufferAttribute>(
        this.obj.instanceMatrix,
        value
      );
    }
  }
}
