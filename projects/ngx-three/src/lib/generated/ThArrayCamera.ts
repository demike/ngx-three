/* eslint-disable @typescript-eslint/ban-types */
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
import { ArrayCamera } from 'three';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';
import { ThPerspectiveCamera } from './ThPerspectiveCamera';

@Component({
  selector: 'th-arrayCamera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
  public set isMultiViewCamera(value: boolean) {
    if (this._objRef) {
      this._objRef.isMultiViewCamera = value;
    }
  }

  public get isMultiViewCamera(): boolean | undefined {
    return this._objRef?.isMultiViewCamera;
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
  @Input()
  public set index(value: number) {
    if (this._objRef) {
      this._objRef.index = value;
    }
  }

  public get index(): number | undefined {
    return this._objRef?.index;
  }
}
