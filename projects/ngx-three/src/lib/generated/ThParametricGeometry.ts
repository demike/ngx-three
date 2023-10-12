/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { NormalBufferAttributes, Vector3 } from 'three';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-parametricGeometry',
  template: '<ng-content/>',
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
    stacks?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<ParametricGeometry> {
    return ParametricGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

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
