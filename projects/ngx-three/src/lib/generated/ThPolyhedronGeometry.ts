/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { PolyhedronGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-polyhedronGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
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
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<PolyhedronGeometry> {
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
