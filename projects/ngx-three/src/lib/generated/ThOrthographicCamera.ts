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
  TARGS extends any[] = [left: number, right: number, top: number, bottom: number, near?: number, far?: number]
> extends ThCamera<TARGS> {
  @Input()
  public objRef!: OrthographicCamera;
  protected getType(): Type<OrthographicCamera> {
    return OrthographicCamera;
  }

  @Input()
  public set type(value: 'OrthographicCamera') {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set zoom(value: number) {
    if (this.objRef) {
      this.objRef.zoom = value;
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
    if (this.objRef) {
      this.objRef.view = value;
    }
  }

  @Input()
  public set left(value: number) {
    if (this.objRef) {
      this.objRef.left = value;
    }
  }

  @Input()
  public set right(value: number) {
    if (this.objRef) {
      this.objRef.right = value;
    }
  }

  @Input()
  public set top(value: number) {
    if (this.objRef) {
      this.objRef.top = value;
    }
  }

  @Input()
  public set bottom(value: number) {
    if (this.objRef) {
      this.objRef.bottom = value;
    }
  }

  @Input()
  public set near(value: number) {
    if (this.objRef) {
      this.objRef.near = value;
    }
  }

  @Input()
  public set far(value: number) {
    if (this.objRef) {
      this.objRef.far = value;
    }
  }
}
