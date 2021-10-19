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
import { BufferGeometry, Material, Points } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-points',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }],
})
export class ThPoints<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends Points<TGeometry, TMaterial> = Points<TGeometry, TMaterial>,
  TARGS extends any[] = [geometry?: TGeometry, material?: TMaterial]
> extends ThObject3D<T, TARGS> {
  public getType(): Type<Points<TGeometry, TMaterial>> {
    return Points;
  }

  @Input()
  public set type(value: 'Points') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set morphTargetInfluences(value: number[]) {
    if (this._objRef) {
      this._objRef.morphTargetInfluences = value;
    }
  }

  @Input()
  public set morphTargetDictionary(value: { [key: string]: number }) {
    if (this._objRef) {
      this._objRef.morphTargetDictionary = value;
    }
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
}
