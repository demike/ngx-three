/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { CircleGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-circleGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThCircleGeometry) }]
})
export class ThCircleGeometry<
  TARGS extends any[] = [radius?: number, segments?: number, thetaStart?: number, thetaLength?: number]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: CircleGeometry;
  protected getType(): Type<CircleGeometry> {
    return CircleGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: { radius: number; segments: number; thetaStart: number; thetaLength: number }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
