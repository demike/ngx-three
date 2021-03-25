/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { TorusKnotGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-torusKnotGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThTorusKnotGeometry) },
  ],
})
export class ThTorusKnotGeometry<
  T extends TorusKnotGeometry = TorusKnotGeometry,
  TARGS extends any[] = [
    radius?: number,
    tube?: number,
    tubularSegments?: number,
    radialSegments?: number,
    p?: number,
    q?: number
  ]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<TorusKnotGeometry> {
    return TorusKnotGeometry;
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
    tubularSegments: number;
    radialSegments: number;
    p: number;
    q: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
