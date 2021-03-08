/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ParametricBufferGeometry, Vector3 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-parametricBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThParametricBufferGeometry),
    },
  ],
})
export class ThParametricBufferGeometry<
  TARGS extends any[] = [
    func: (u: number, v: number, dest: Vector3) => void,
    slices: number,
    stacks: number
  ]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public obj!: ParametricBufferGeometry;
  protected getType(): Type<ParametricBufferGeometry> {
    return ParametricBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    func: (u: number, v: number, dest: Vector3) => void;
    slices: number;
    stacks: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
