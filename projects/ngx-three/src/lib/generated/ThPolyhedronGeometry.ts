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
import { PolyhedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-polyhedronGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThPolyhedronGeometry),
    },
  ],
})
export class ThPolyhedronGeometry<
  T extends PolyhedronGeometry = PolyhedronGeometry,
  TARGS extends any[] = [
    vertices: number[],
    indices: number[],
    radius?: number,
    detail?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<PolyhedronGeometry> {
    return PolyhedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    vertices: number[];
    indices: number[];
    radius: number;
    detail: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
