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
import { Shape } from 'three';
import {
  TextBufferGeometry,
  TextGeometryParameters,
} from 'three/examples/jsm/geometries/TextGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';

@Component({
  selector: 'th-textBufferGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTextBufferGeometry),
    },
  ],
})
export class ThTextBufferGeometry<
  T extends TextBufferGeometry = TextBufferGeometry,
  TARGS = [text: string, parameters?: TextGeometryParameters],
> extends ThExtrudeGeometry<T, TARGS> {
  public getType(): Type<TextBufferGeometry> {
    return TextBufferGeometry;
  }

  public get type(): (string | 'TextGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly shapes: Shape | Shape[];
        readonly options: TextGeometryParameters;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
