/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { OrthographicCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-orthographicCamera',
  template: '',
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
  TARGS extends any[] = [left: number, right: number, top: number, bottom: number, near?: number, far?: number]
> extends ThCamera<T, TARGS> {
  public getType(): Type<OrthographicCamera> {
    return OrthographicCamera;
  }

  @Input()
  public set type(value: 'OrthographicCamera') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set zoom(value: number) {
    if (this._objRef) {
      this._objRef.zoom = value;
    }
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

  @Input()
  public set left(value: number) {
    if (this._objRef) {
      this._objRef.left = value;
    }
  }

  @Input()
  public set right(value: number) {
    if (this._objRef) {
      this._objRef.right = value;
    }
  }

  @Input()
  public set top(value: number) {
    if (this._objRef) {
      this._objRef.top = value;
    }
  }

  @Input()
  public set bottom(value: number) {
    if (this._objRef) {
      this._objRef.bottom = value;
    }
  }

  @Input()
  public set near(value: number) {
    if (this._objRef) {
      this._objRef.near = value;
    }
  }

  @Input()
  public set far(value: number) {
    if (this._objRef) {
      this._objRef.far = value;
    }
  }
}
