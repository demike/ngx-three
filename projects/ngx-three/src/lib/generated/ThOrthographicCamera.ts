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
import { OrthographicCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-orthographicCamera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThOrthographicCamera),
    },
    { provide: ThCamera, useExisting: forwardRef(() => ThOrthographicCamera) },
  ],
})
export class ThOrthographicCamera<
  T extends OrthographicCamera = OrthographicCamera,
  TARGS = [
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
    near?: number,
    far?: number,
  ],
> extends ThCamera<T, TARGS> {
  public getType(): Type<OrthographicCamera> {
    return OrthographicCamera;
  }

  public get isOrthographicCamera(): true | undefined {
    return this._objRef?.isOrthographicCamera;
  }
  public get type(): (string | 'OrthographicCamera') | undefined {
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
  public set left(value: number) {
    if (this._objRef) {
      this._objRef.left = value;
    }
  }

  public get left(): number | undefined {
    return this._objRef?.left;
  }
  @Input()
  public set right(value: number) {
    if (this._objRef) {
      this._objRef.right = value;
    }
  }

  public get right(): number | undefined {
    return this._objRef?.right;
  }
  @Input()
  public set top(value: number) {
    if (this._objRef) {
      this._objRef.top = value;
    }
  }

  public get top(): number | undefined {
    return this._objRef?.top;
  }
  @Input()
  public set bottom(value: number) {
    if (this._objRef) {
      this._objRef.bottom = value;
    }
  }

  public get bottom(): number | undefined {
    return this._objRef?.bottom;
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
}
