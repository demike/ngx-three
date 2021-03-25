/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Font, TextGeometry, TextGeometryParameters } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-textGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThTextGeometry) },
  ],
})
export class ThTextGeometry<
  T extends TextGeometry = TextGeometry,
  TARGS extends any[] = [text: string, parameters: TextGeometryParameters]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<TextGeometry> {
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
    /**
     * @default 50
     */
    height: number;
    curveSegments: number;
    /**
     * @default false
     */
    bevelEnabled: boolean;
    /**
     * @default 10
     */
    bevelThickness: number;
    /**
     * @default 8
     */
    bevelSize: number;
    bevelOffset: number;
    bevelSegments: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
