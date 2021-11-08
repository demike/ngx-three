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
import {
  ArrowHelper,
  ColorRepresentation,
  Event,
  Line,
  Mesh,
  Vector3,
} from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-arrowHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
  ],
})
export class ThArrowHelper<
  T extends ArrowHelper = ArrowHelper,
  TARGS extends any[] = [
    dir?: Vector3,
    origin?: Vector3,
    length?: number,
    color?: ColorRepresentation,
    headLength?: number,
    headWidth?: number
  ]
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<ArrowHelper> {
    return ArrowHelper;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set line(value: Line) {
    if (this._objRef) {
      this._objRef.line = value;
    }
  }

  @Input()
  public set cone(value: Mesh) {
    if (this._objRef) {
      this._objRef.cone = value;
    }
  }
}
