/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Vector3 } from 'three';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-parametricGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThParametricGeometry),
    },
  ],
})
export class ThParametricGeometry<
  T extends ParametricGeometry = ParametricGeometry,
  TARGS = [
    func?: (u: number, v: number, target: Vector3) => void,
    slices?: number,
    stacks?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<ParametricGeometry> {
    return ParametricGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set parameters(value: {
    func: (u: number, v: number, dest: Vector3) => void;
    slices: number;
    stacks: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }

  // @ts-ignore
  public get parameters():
    | {
        func: (u: number, v: number, dest: Vector3) => void;
        slices: number;
        stacks: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
