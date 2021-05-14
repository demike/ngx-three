/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Font, TextGeometry, TextGeometryParameters } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThExtrudeGeometry } from './ThExtrudeGeometry';

@Component({
  selector: 'th-textGeometry',
  template: '',
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
  TARGS extends any[] = [text: string, parameters: TextGeometryParameters]
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
}
