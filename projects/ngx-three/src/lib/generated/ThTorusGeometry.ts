/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { TorusGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-torusGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThTorusGeometry) },
  ],
})
export class ThTorusGeometry<
  T extends TorusGeometry = TorusGeometry,
  TARGS extends any[] = [
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number
  ]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<TorusGeometry> {
    return TorusGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    radius: number;
    tube: number;
    radialSegments: number;
    tubularSegments: number;
    arc: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
