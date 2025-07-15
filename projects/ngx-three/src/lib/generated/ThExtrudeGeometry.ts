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
import {
  BufferGeometryEventMap,
  ExtrudeGeometry,
  ExtrudeGeometryOptions,
  NormalBufferAttributes,
} from 'three';
import { Shape } from 'three/src/extras/core/Shape.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-extrudeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThExtrudeGeometry),
    },
  ],
})
export class ThExtrudeGeometry<
  T extends ExtrudeGeometry = ExtrudeGeometry,
  TARGS = [shapes?: Shape | Shape[], options?: ExtrudeGeometryOptions],
> extends ThBufferGeometry<
  NormalBufferAttributes,
  BufferGeometryEventMap,
  T,
  TARGS
> {
  public getType(): Type<ExtrudeGeometry> {
    return ExtrudeGeometry;
  }

  public get type(): (string | 'ExtrudeGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly shapes: Shape | Shape[];
        readonly options: ExtrudeGeometryOptions;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
