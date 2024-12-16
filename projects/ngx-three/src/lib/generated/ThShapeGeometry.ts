/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { NormalBufferAttributes, ShapeGeometry } from 'three';
import { Shape } from 'three/src/extras/core/Shape.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-shapeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThShapeGeometry),
    },
  ],
})
export class ThShapeGeometry<
  T extends ShapeGeometry = ShapeGeometry,
  TARGS = [shapes?: Shape | Shape[], curveSegments?: number],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<ShapeGeometry> {
    return ShapeGeometry;
  }

  public get type(): (string | 'ShapeGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly shapes: Shape | Shape[];
        readonly curveSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
