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
import { BufferGeometry, Event, Material, Mesh } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-mesh',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThMesh) }],
})
export class ThMesh<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends Mesh<TGeometry, TMaterial> = Mesh<TGeometry, TMaterial>,
  TARGS = [geometry?: TGeometry, material?: TMaterial]
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<Mesh<TGeometry, TMaterial>> {
    return Mesh;
  }

  @Input()
  public set geometry(value: TGeometry) {
    if (this._objRef) {
      this._objRef.geometry = value;
    }
  }

  @Input()
  public set material(value: TMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  @Input()
  public set morphTargetInfluences(value: number[] | undefined) {
    if (this._objRef) {
      this._objRef.morphTargetInfluences = value;
    }
  }

  @Input()
  public set morphTargetDictionary(
    value: { [key: string]: number } | undefined
  ) {
    if (this._objRef) {
      this._objRef.morphTargetDictionary = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
