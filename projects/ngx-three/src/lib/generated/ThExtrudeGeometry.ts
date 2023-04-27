/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-extrudeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThExtrudeGeometry),
    },
  ],
})
export class ThExtrudeGeometry<
  T extends ExtrudeGeometry = ExtrudeGeometry,
  TARGS = [shapes?: Shape | Shape[], options?: ExtrudeGeometryOptions]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<ExtrudeGeometry> {
    return ExtrudeGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'ExtrudeGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly shapes: Shape | Shape[];
        readonly options: ExtrudeGeometryOptions;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
