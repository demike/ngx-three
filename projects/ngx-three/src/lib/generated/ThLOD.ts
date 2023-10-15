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
import { LOD, Object3D, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lOD',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }],
})
export class ThLOD<T extends LOD = LOD, TARGS = []> extends ThObject3D<
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<LOD> {
    return LOD;
  }

  public get isLOD(): true | undefined {
    return this._objRef?.isLOD;
  }
  public get type(): (string | 'LOD') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set levels(
    value: Array<{
      /** The Object3D to display at this level. */
      object: Object3D;
      /** The distance at which to display this level of detail. Expects a `Float`. */
      distance: number;
      /** Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. */
      hysteresis: number;
    }>,
  ) {
    if (this._objRef) {
      this._objRef.levels = value;
    }
  }

  public get levels():
    | Array<{
        /** The Object3D to display at this level. */
        object: Object3D;
        /** The distance at which to display this level of detail. Expects a `Float`. */
        distance: number;
        /** Threshold used to avoid flickering at LOD boundaries, as a fraction of distance. Expects a `Float`. */
        hysteresis: number;
      }>
    | undefined {
    return this._objRef?.levels;
  }
  @Input()
  public set autoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.autoUpdate = value;
    }
  }

  public get autoUpdate(): boolean | undefined {
    return this._objRef?.autoUpdate;
  }
}
