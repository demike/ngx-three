/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { RingBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-ringBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThRingBufferGeometry),
    },
  ],
})
export class ThRingBufferGeometry<
  T extends RingBufferGeometry = RingBufferGeometry,
  TARGS extends any[] = [
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  protected getType(): Type<RingBufferGeometry> {
    return RingBufferGeometry;
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
