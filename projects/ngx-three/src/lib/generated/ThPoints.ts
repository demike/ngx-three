// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BufferGeometry, Geometry, Material, Points } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-points',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }],
})
export class ThPoints<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry?: TGeometry, material?: TMaterial]
> extends ThObject3D<TARGS> {
  @Input()
  public obj!: Points<TGeometry, TMaterial>;
  protected getType(): Type<Points<TGeometry, TMaterial>> {
    return Points;
  }

  @Input()
  public set type(value: 'Points') {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set morphTargetInfluences(value: number[]) {
    if (this.obj) {
      this.obj.morphTargetInfluences = value;
    }
  }

  @Input()
  public set morphTargetDictionary(value: { [key: string]: number }) {
    if (this.obj) {
      this.obj.morphTargetDictionary = value;
    }
  }

  @Input()
  public set geometry(value: TGeometry) {
    if (this.obj) {
      this.obj.geometry = value;
    }
  }

  @Input()
  public set material(value: TMaterial) {
    if (this.obj) {
      this.obj.material = value;
    }
  }
}
