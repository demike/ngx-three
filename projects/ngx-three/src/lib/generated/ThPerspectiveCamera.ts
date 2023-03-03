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
import { PerspectiveCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-perspectiveCamera',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
    { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
  ],
})
export class ThPerspectiveCamera<
  T extends PerspectiveCamera = PerspectiveCamera,
  TARGS = [fov?: number, aspect?: number, near?: number, far?: number]
> extends ThCamera<T, TARGS> {
  public getType(): Type<PerspectiveCamera> {
    return PerspectiveCamera;
  }

  @Input()
  public set type(value: 'PerspectiveCamera') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): 'PerspectiveCamera' | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get isPerspectiveCamera(): true | undefined {
    return this._objRef?.isPerspectiveCamera;
  }
  @Input()
  public set zoom(value: number) {
    if (this._objRef) {
      this._objRef.zoom = value;
    }
  }

  // @ts-ignore
  public get zoom(): number | undefined {
    return this._objRef?.zoom;
  }
  @Input()
  public set fov(value: number) {
    if (this._objRef) {
      this._objRef.fov = value;
    }
  }

  // @ts-ignore
  public get fov(): number | undefined {
    return this._objRef?.fov;
  }
  @Input()
  public set aspect(value: number) {
    if (this._objRef) {
      this._objRef.aspect = value;
    }
  }

  // @ts-ignore
  public get aspect(): number | undefined {
    return this._objRef?.aspect;
  }
  @Input()
  public set near(value: number) {
    if (this._objRef) {
      this._objRef.near = value;
    }
  }

  // @ts-ignore
  public get near(): number | undefined {
    return this._objRef?.near;
  }
  @Input()
  public set far(value: number) {
    if (this._objRef) {
      this._objRef.far = value;
    }
  }

  // @ts-ignore
  public get far(): number | undefined {
    return this._objRef?.far;
  }
  @Input()
  public set focus(value: number) {
    if (this._objRef) {
      this._objRef.focus = value;
    }
  }

  // @ts-ignore
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
    }
  ) {
    if (this._objRef) {
      this._objRef.view = value;
    }
  }

  // @ts-ignore
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

  // @ts-ignore
  public get filmGauge(): number | undefined {
    return this._objRef?.filmGauge;
  }
  @Input()
  public set filmOffset(value: number) {
    if (this._objRef) {
      this._objRef.filmOffset = value;
    }
  }

  // @ts-ignore
  public get filmOffset(): number | undefined {
    return this._objRef?.filmOffset;
  }
}
