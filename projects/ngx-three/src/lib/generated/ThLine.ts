/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { BufferGeometry, Line, Material, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-line',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }],
})
export class ThLine<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends Line<TGeometry, TMaterial> = Line<TGeometry, TMaterial>,
  TARGS = [geometry?: TGeometry, material?: TMaterial],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<Line<TGeometry, TMaterial>> {
    return Line;
  }

  public get isLine(): true | undefined {
    return this._objRef?.isLine;
  }
  public get type(): (string | 'Line') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set geometry(value: TGeometry) {
    if (this._objRef) {
      this._objRef.geometry = value;
    }
  }

  public get geometry(): TGeometry | undefined {
    return this._objRef?.geometry;
  }
  @Input()
  public set material(value: TMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  public get material(): TMaterial | undefined {
    return this._objRef?.material;
  }
  @Input()
  public set morphTargetInfluences(value: number[] | undefined) {
    if (this._objRef) {
      this._objRef.morphTargetInfluences = value;
    }
  }

  public get morphTargetInfluences(): (number[] | undefined) | undefined {
    return this._objRef?.morphTargetInfluences;
  }
  @Input()
  public set morphTargetDictionary(
    value: { [key: string]: number } | undefined,
  ) {
    if (this._objRef) {
      this._objRef.morphTargetDictionary = value;
    }
  }

  public get morphTargetDictionary():
    | ({ [key: string]: number } | undefined)
    | undefined {
    return this._objRef?.morphTargetDictionary;
  }
}
