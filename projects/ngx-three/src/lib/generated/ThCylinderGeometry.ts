/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { CylinderGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-cylinderGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThCylinderGeometry) }]
})
export class ThCylinderGeometry<
  TARGS extends any[] = [
    radiusTop?: number,
    radiusBottom?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThGeometry<TARGS> {
  @Input()
  public objRef!: CylinderGeometry;
  protected getType(): Type<CylinderGeometry> {
    return CylinderGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    radiusTop: number;
    radiusBottom: number;
    height: number;
    radialSegments: number;
    heightSegments: number;
    openEnded: boolean;
    thetaStart: number;
    thetaLength: number;
  }) {
    if (this.objRef) {
      this.objRef.parameters = value;
    }
  }
}
