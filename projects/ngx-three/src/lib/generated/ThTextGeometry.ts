/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { Shape } from 'three';
import { TextGeometry, TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';

@Component({
  selector: 'th-textGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTextGeometry)
    }
  ]
})
export class ThTextGeometry<
  T extends TextGeometry = TextGeometry,
  TARGS = [text: string, parameters?: TextGeometryParameters]
> extends ThExtrudeGeometry<T, TARGS> {
  public getType(): Type<TextGeometry> {
    return TextGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'TextGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly shapes: Shape | Shape[];
        readonly options: TextGeometryParameters;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
