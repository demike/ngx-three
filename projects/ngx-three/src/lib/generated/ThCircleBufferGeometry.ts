/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { CircleBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-circleBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThCircleBufferGeometry),
    },
  ],
})
export class ThCircleBufferGeometry<
  T extends CircleBufferGeometry = CircleBufferGeometry,
  TARGS extends any[] = [
    radius?: number,
    segments?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  protected getType(): Type<CircleBufferGeometry> {
    return CircleBufferGeometry;
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
