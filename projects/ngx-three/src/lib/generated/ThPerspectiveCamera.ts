/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { PerspectiveCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-perspectiveCamera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
    { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
  ],
})
export class ThPerspectiveCamera<
  T extends PerspectiveCamera = PerspectiveCamera,
  TARGS = [fov?: number, aspect?: number, near?: number, far?: number],
> extends ThCamera<T, TARGS> {
  public getType(): Type<PerspectiveCamera> {
    return PerspectiveCamera;
  }

  public get isPerspectiveCamera(): true | undefined {
    return this._objRef?.isPerspectiveCamera;
  }
  public get type(): (string | 'PerspectiveCamera') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set zoom(value: number) {
    if (this._objRef) {
      this._objRef.zoom = value;
    }
  }

  public get zoom(): number | undefined {
    return this._objRef?.zoom;
  }
  @Input()
  public set fov(value: number) {
    if (this._objRef) {
      this._objRef.fov = value;
    }
  }

  public get fov(): number | undefined {
    return this._objRef?.fov;
  }
  @Input()
  public set aspect(value: number) {
    if (this._objRef) {
      this._objRef.aspect = value;
    }
  }

  public get aspect(): number | undefined {
    return this._objRef?.aspect;
  }
  @Input()
  public set near(value: number) {
    if (this._objRef) {
      this._objRef.near = value;
    }
  }

  public get near(): number | undefined {
    return this._objRef?.near;
  }
  @Input()
  public set far(value: number) {
    if (this._objRef) {
      this._objRef.far = value;
    }
  }

  public get far(): number | undefined {
    return this._objRef?.far;
  }
  @Input()
  public set focus(value: number) {
    if (this._objRef) {
      this._objRef.focus = value;
    }
  }

  public get focus(): number | undefined {
    return this._objRef?.focus;
  }
  @Input()
  public set view(
    value: null | {
      enabled: boolean;
      fullWidth: number;
      fullHeight: number;
      offsetX: number;
      offsetY: number;
      width: number;
      height: number;
    },
  ) {
    if (this._objRef) {
      this._objRef.view = value;
    }
  }

  public get view():
    | (null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
      })
    | undefined {
    return this._objRef?.view;
  }
  @Input()
  public set filmGauge(value: number) {
    if (this._objRef) {
      this._objRef.filmGauge = value;
    }
  }

  public get filmGauge(): number | undefined {
    return this._objRef?.filmGauge;
  }
  @Input()
  public set filmOffset(value: number) {
    if (this._objRef) {
      this._objRef.filmOffset = value;
    }
  }

  public get filmOffset(): number | undefined {
    return this._objRef?.filmOffset;
  }
}
