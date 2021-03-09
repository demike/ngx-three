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
  TARGS extends any[] = [
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: RingGeometry;
  protected getType(): Type<RingGeometry> {
    return RingGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
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
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
