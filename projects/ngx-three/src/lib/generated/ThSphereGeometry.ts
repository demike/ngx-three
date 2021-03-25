/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { SphereGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-sphereGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThSphereGeometry) },
  ],
})
export class ThSphereGeometry<
  T extends SphereGeometry = SphereGeometry,
  TARGS extends any[] = [
    radius?: number,
    widthSegments?: number,
    heightSegments?: number,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<SphereGeometry> {
    return SphereGeometry;
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
    widthSegments: number;
    heightSegments: number;
    phiStart: number;
    phiLength: number;
    thetaStart: number;
    thetaLength: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
