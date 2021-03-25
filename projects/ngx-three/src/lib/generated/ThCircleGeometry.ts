/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { CircleGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-circleGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThCircleGeometry) },
  ],
})
export class ThCircleGeometry<
  T extends CircleGeometry = CircleGeometry,
  TARGS extends any[] = [
    radius?: number,
    segments?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<CircleGeometry> {
    return CircleGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    radius: number;
    segments: number;
    thetaStart: number;
    thetaLength: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
