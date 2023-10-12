/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
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
  TARGS = /* cameras? */ PerspectiveCamera[],
> extends ThPerspectiveCamera<T, TARGS> {
  public getType(): Type<ArrayCamera> {
    return ArrayCamera;
  }

  public get isArrayCamera(): true | undefined {
    return this._objRef?.isArrayCamera;
  }
  @Input()
  public set cameras(value: PerspectiveCamera[]) {
    if (this._objRef) {
      this._objRef.cameras = value;
    }
  }

  public get cameras(): PerspectiveCamera[] | undefined {
    return this._objRef?.cameras;
  }
}
