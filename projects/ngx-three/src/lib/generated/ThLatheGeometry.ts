/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { LatheGeometry, Vector2 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-latheGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThLatheGeometry)
    }
  ]
})
export class ThLatheGeometry<
  T extends LatheGeometry = LatheGeometry,
  TARGS = [points?: Vector2[], segments?: number, phiStart?: number, phiLength?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<LatheGeometry> {
    return LatheGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'LatheGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly points: Vector2[];
        readonly segments: number;
        readonly phiStart: number;
        readonly phiLength: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
