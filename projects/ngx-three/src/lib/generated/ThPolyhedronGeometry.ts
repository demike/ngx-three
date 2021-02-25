// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
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
  TARGS extends any[] = [
    vertices: number[],
    indices: number[],
    radius?: number,
    detail?: number
  ]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: PolyhedronGeometry;
  protected getType(): Type<PolyhedronGeometry> {
    return PolyhedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    vertices: number[];
    indices: number[];
    radius: number;
    detail: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
