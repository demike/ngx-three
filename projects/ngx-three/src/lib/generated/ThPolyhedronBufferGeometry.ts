/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { PolyhedronBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-polyhedronBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThPolyhedronBufferGeometry),
    },
  ],
})
export class ThPolyhedronBufferGeometry<
  T extends PolyhedronBufferGeometry = PolyhedronBufferGeometry,
  TARGS extends any[] = [
    vertices: number[],
    indices: number[],
    radius?: number,
    detail?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  protected getType(): Type<PolyhedronBufferGeometry> {
    return PolyhedronBufferGeometry;
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
