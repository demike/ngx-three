/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { ParametricGeometry, Vector3 } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-parametricGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThParametricGeometry)
    }
  ]
})
export class ThParametricGeometry<
  TARGS extends any[] = [func: (u: number, v: number, dest: Vector3) => void, slices: number, stacks: number]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: ParametricGeometry;
  protected getType(): Type<ParametricGeometry> {
    return ParametricGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: { func: (u: number, v: number, dest: Vector3) => void; slices: number; stacks: number }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
