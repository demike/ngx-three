/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { LineLoop } from 'three';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Object3DEventMap } from 'three/src/core/Object3D.js';
import { Material } from 'three/src/materials/Material.js';
import { ThLine } from './ThLine';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lineLoop',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
  ],
})
export class ThLineLoop<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TEventMap extends Object3DEventMap = Object3DEventMap,
  T extends LineLoop<TGeometry, TMaterial, TEventMap> = LineLoop<
    TGeometry,
    TMaterial,
    TEventMap
  >,
  TARGS = [geometry?: TGeometry, material?: TMaterial],
> extends ThLine<TGeometry, TMaterial, TEventMap, T, TARGS> {
  public getType(): Type<LineLoop<TGeometry, TMaterial, TEventMap>> {
    return LineLoop;
  }

  public get isLineLoop(): true | undefined {
    return this._objRef?.isLineLoop;
  }
  public get type(): (string | 'LineLoop') | undefined {
    return this._objRef?.type;
  }
}
