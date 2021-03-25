/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { RingGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-ringGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThRingGeometry) },
  ],
})
export class ThRingGeometry<
  T extends RingGeometry = RingGeometry,
  TARGS extends any[] = [
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<RingGeometry> {
    return RingGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    innerRadius: number;
    outerRadius: number;
    thetaSegments: number;
    phiSegments: number;
    thetaStart: number;
    thetaLength: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
