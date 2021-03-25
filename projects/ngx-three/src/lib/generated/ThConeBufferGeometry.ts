/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ConeBufferGeometry } from 'three';
import { ThCylinderBufferGeometry } from './ThCylinderBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-coneBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThConeBufferGeometry),
    },
  ],
})
export class ThConeBufferGeometry<
  T extends ConeBufferGeometry = ConeBufferGeometry,
  TARGS extends any[] = [
    radius?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThCylinderBufferGeometry<T, TARGS> {
  protected getType(): Type<ConeBufferGeometry> {
    return ConeBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
