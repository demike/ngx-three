/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { OrthographicCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-orthographicCamera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThOrthographicCamera)
    },
    { provide: ThCamera, useExisting: forwardRef(() => ThOrthographicCamera) }
  ]
})
export class ThOrthographicCamera<
  T extends OrthographicCamera = OrthographicCamera,
  TARGS = [left?: number, right?: number, top?: number, bottom?: number, near?: number, far?: number]
> extends ThCamera<T, TARGS> {
  public getType(): Type<OrthographicCamera> {
    return OrthographicCamera;
  }

  // @ts-ignore
  public get isOrthographicCamera(): true | undefined {
    return this._objRef?.isOrthographicCamera;
  }
  // @ts-ignore
  public get type(): (string | 'OrthographicCamera') | undefined {
    return this._objRef?.type;
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
  public set left(value: number) {
    if (this._objRef) {
      this._objRef.left = value;
    }
  }

  // @ts-ignore
  public get left(): number | undefined {
    return this._objRef?.left;
  }
  @Input()
  public set right(value: number) {
    if (this._objRef) {
      this._objRef.right = value;
    }
  }

  // @ts-ignore
  public get right(): number | undefined {
    return this._objRef?.right;
  }
  @Input()
  public set top(value: number) {
    if (this._objRef) {
      this._objRef.top = value;
    }
  }

  // @ts-ignore
  public get top(): number | undefined {
    return this._objRef?.top;
  }
  @Input()
  public set bottom(value: number) {
    if (this._objRef) {
      this._objRef.bottom = value;
    }
  }

  // @ts-ignore
  public get bottom(): number | undefined {
    return this._objRef?.bottom;
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
}
