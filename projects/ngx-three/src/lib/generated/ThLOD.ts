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
import { Event, LOD, Object3D } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lOD',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }],
})
export class ThLOD<T extends LOD = LOD, TARGS = []> extends ThObject3D<
  Event,
  T,
  TARGS
> {
  public getType(): Type<LOD> {
    return LOD;
  }

  @Input()
  public set type(value: 'LOD') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): 'LOD' | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set levels(
    value: Array<{ distance: number; hysteresis: number; object: Object3D }>
  ) {
    if (this._objRef) {
      this._objRef.levels = value;
    }
  }

  // @ts-ignore
  public get levels():
    | Array<{ distance: number; hysteresis: number; object: Object3D }>
    | undefined {
    return this._objRef?.levels;
  }
  @Input()
  public set autoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.autoUpdate = value;
    }
  }

  // @ts-ignore
  public get autoUpdate(): boolean | undefined {
    return this._objRef?.autoUpdate;
  }
  // @ts-ignore
  public get isLOD(): true | undefined {
    return this._objRef?.isLOD;
  }
  @Input()
  public set objects(value: any[]) {
    if (this._objRef) {
      this._objRef.objects = value;
    }
  }

  // @ts-ignore
  public get objects(): any[] | undefined {
    return this._objRef?.objects;
  }
}
