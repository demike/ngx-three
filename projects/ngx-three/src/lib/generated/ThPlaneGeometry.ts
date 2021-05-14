/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { PlaneGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-planeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThPlaneGeometry)
    }
  ]
})
export class ThPlaneGeometry<
  T extends PlaneGeometry = PlaneGeometry,
  TARGS extends any[] = [width?: number, height?: number, widthSegments?: number, heightSegments?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<PlaneGeometry> {
    return PlaneGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { width: number; height: number; widthSegments: number; heightSegments: number }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
