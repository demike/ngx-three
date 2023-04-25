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
import { CircleGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-circleGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThCircleGeometry),
    },
  ],
})
export class ThCircleGeometry<
  T extends CircleGeometry = CircleGeometry,
  TARGS = [
    radius?: number,
    segments?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<CircleGeometry> {
    return CircleGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
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

  // @ts-ignore
  public get parameters():
    | {
        radius: number;
        segments: number;
        thetaStart: number;
        thetaLength: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
