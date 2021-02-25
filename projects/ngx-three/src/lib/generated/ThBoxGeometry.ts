// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BoxGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-boxGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThBoxGeometry) },
  ],
})
export class ThBoxGeometry<
  TARGS extends any[] = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: BoxGeometry;
  protected getType(): Type<BoxGeometry> {
    return BoxGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    width: number;
    height: number;
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
