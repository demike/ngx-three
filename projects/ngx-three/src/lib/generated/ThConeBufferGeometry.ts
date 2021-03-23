/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
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
      useExisting: forwardRef(() => ThConeBufferGeometry)
    }
  ]
})
export class ThConeBufferGeometry<
  TARGS extends any[] = [
    radius?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThCylinderBufferGeometry<TARGS> {
  @Input()
  public objRef!: ConeBufferGeometry;
  protected getType(): Type<ConeBufferGeometry> {
    return ConeBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }
}
