/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BoxBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-boxBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThBoxBufferGeometry) },
  ],
})
export class ThBoxBufferGeometry<
  T extends BoxBufferGeometry = BoxBufferGeometry,
  TARGS extends any[] = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  protected getType(): Type<BoxBufferGeometry> {
    return BoxBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    width: number;
    height: number;
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
