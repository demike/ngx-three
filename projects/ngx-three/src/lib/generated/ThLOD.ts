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
  template: '',
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

  @Input()
  public set levels(
    value: Array<{ distance: number; hysteresis: number; object: Object3D }>
  ) {
    if (this._objRef) {
      this._objRef.levels = value;
    }
  }

  @Input()
  public set autoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.autoUpdate = value;
    }
  }

  @Input()
  public set objects(value: any[]) {
    if (this._objRef) {
      this._objRef.objects = value;
    }
  }
}
