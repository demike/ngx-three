/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ConeGeometry } from 'three';
import { ThCylinderGeometry } from './ThCylinderGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-coneGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThConeGeometry) },
  ],
})
export class ThConeGeometry<
  T extends ConeGeometry = ConeGeometry,
  TARGS extends any[] = [
    radius?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThCylinderGeometry<T, TARGS> {
  protected getType(): Type<ConeGeometry> {
    return ConeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
