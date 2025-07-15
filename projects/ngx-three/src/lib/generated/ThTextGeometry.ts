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
  TextGeometry,
  TextGeometryParameters,
} from 'three/examples/jsm/geometries/TextGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';

@Component({
  selector: 'th-textGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTextGeometry),
    },
  ],
})
export class ThTextGeometry<
  T extends TextGeometry = TextGeometry,
  TARGS = [text: string, parameters?: TextGeometryParameters],
> extends ThExtrudeGeometry<T, TARGS> {
  public getType(): Type<TextGeometry> {
    return TextGeometry;
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
