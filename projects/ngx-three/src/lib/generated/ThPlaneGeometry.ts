/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { PlaneGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-planeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThPlaneGeometry) },
  ],
})
export class ThPlaneGeometry<
  T extends PlaneGeometry = PlaneGeometry,
  TARGS extends any[] = [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<PlaneGeometry> {
    return PlaneGeometry;
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
    widthSegments: number;
    heightSegments: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
