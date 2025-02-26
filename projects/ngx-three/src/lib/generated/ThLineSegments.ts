/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { LineSegments } from 'three';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Object3DEventMap } from 'three/src/core/Object3D.js';
import { Material } from 'three/src/materials/Material.js';
import { ThLine } from './ThLine';
import { ThObject3D } from './ThObject3D';

@Component({
    selector: 'th-lineSegments',
    template: '<ng-content/>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
    ],
    standalone: false
})
export class ThLineSegments<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TEventMap extends Object3DEventMap = Object3DEventMap,
  T extends LineSegments<TGeometry, TMaterial, TEventMap> = LineSegments<
    TGeometry,
    TMaterial,
    TEventMap
  >,
  TARGS = [geometry?: TGeometry, material?: TMaterial],
> extends ThLine<TGeometry, TMaterial, TEventMap, T, TARGS> {
  public getType(): Type<LineSegments<TGeometry, TMaterial, TEventMap>> {
    return LineSegments;
  }

  public get isLineSegments(): true | undefined {
    return this._objRef?.isLineSegments;
  }
  public get type(): (string | 'LineSegments') | undefined {
    return this._objRef?.type;
  }
}
