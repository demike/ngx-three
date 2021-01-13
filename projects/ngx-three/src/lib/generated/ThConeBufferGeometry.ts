// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
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
  public obj!: ConeBufferGeometry;
  protected getType(): Type<ConeBufferGeometry> {
    return ConeBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
