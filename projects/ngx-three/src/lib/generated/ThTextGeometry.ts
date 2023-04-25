/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  TextGeometry,
  TextGeometryParameters,
} from 'three/examples/jsm/geometries/TextGeometry';
import { Font } from 'three/examples/jsm/loaders/FontLoader';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';

@Component({
  selector: 'th-textGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTextGeometry),
    },
  ],
})
export class ThTextGeometry<
  T extends TextGeometry = TextGeometry,
  TARGS = [text: string, parameters: TextGeometryParameters]
> extends ThExtrudeGeometry<T, TARGS> {
  public getType(): Type<TextGeometry> {
    return TextGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set parameters(value: {
    font: Font;
    size: number;
    height: number;
    curveSegments: number;
    bevelEnabled: boolean;
    bevelThickness: number;
    bevelSize: number;
    bevelOffset: number;
    bevelSegments: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }

  // @ts-ignore
  public get parameters():
    | {
        font: Font;
        size: number;
        height: number;
        curveSegments: number;
        bevelEnabled: boolean;
        bevelThickness: number;
        bevelSize: number;
        bevelOffset: number;
        bevelSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
