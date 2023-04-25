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
import { ArrayCamera, PerspectiveCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';
import { ThPerspectiveCamera } from './ThPerspectiveCamera';

@Component({
  selector: 'th-arrayCamera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
    { provide: ThCamera, useExisting: forwardRef(() => ThArrayCamera) },
  ],
})
export class ThArrayCamera<
  T extends ArrayCamera = ArrayCamera,
  TARGS = /* cameras? */ PerspectiveCamera[]
> extends ThPerspectiveCamera<T, TARGS> {
  public getType(): Type<ArrayCamera> {
    return ArrayCamera;
  }

  @Input()
  public set cameras(value: PerspectiveCamera[]) {
    if (this._objRef) {
      this._objRef.cameras = value;
    }
  }

  // @ts-ignore
  public get cameras(): PerspectiveCamera[] | undefined {
    return this._objRef?.cameras;
  }
  // @ts-ignore
  public get isArrayCamera(): true | undefined {
    return this._objRef?.isArrayCamera;
  }
}
