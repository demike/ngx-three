/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { Shape, ShapeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-shapeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThShapeGeometry)
    }
  ]
})
export class ThShapeGeometry<
  T extends ShapeGeometry = ShapeGeometry,
  TARGS = [shapes?: Shape | Shape[], curveSegments?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<ShapeGeometry> {
    return ShapeGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'ShapeGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly shapes: Shape | Shape[];
        readonly curveSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
