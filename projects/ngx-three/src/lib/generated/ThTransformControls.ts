/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, MOUSE, Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { ThControlBase } from '../ThControlBase';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-transformControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTransformControls)
    }
  ]
})
export class ThTransformControls<TARGS extends any[] = [object: Camera, domElement?: HTMLElement]> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: TransformControls;
  protected getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set domElement(value: HTMLElement) {
    if (this.objRef) {
      this.objRef.domElement = value;
    }
  }

  @Input()
  public set camera(value: Camera) {
    if (this.objRef) {
      this.objRef.camera = value;
    }
  }

  @Input()
  public set object(value: Object3D | undefined) {
    if (this.objRef) {
      this.objRef.object = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this.objRef) {
      this.objRef.enabled = value;
    }
  }

  @Input()
  public set axis(value: string | null) {
    if (this.objRef) {
      this.objRef.axis = value;
    }
  }

  @Input()
  public set mode(value: string) {
    if (this.objRef) {
      this.objRef.mode = value;
    }
  }

  @Input()
  public set translationSnap(value: number | null) {
    if (this.objRef) {
      this.objRef.translationSnap = value;
    }
  }

  @Input()
  public set rotationSnap(value: number | null) {
    if (this.objRef) {
      this.objRef.rotationSnap = value;
    }
  }

  @Input()
  public set space(value: string) {
    if (this.objRef) {
      this.objRef.space = value;
    }
  }

  @Input()
  public set size(value: number) {
    if (this.objRef) {
      this.objRef.size = value;
    }
  }

  @Input()
  public set dragging(value: boolean) {
    if (this.objRef) {
      this.objRef.dragging = value;
    }
  }

  @Input()
  public set showX(value: boolean) {
    if (this.objRef) {
      this.objRef.showX = value;
    }
  }

  @Input()
  public set showY(value: boolean) {
    if (this.objRef) {
      this.objRef.showY = value;
    }
  }

  @Input()
  public set showZ(value: boolean) {
    if (this.objRef) {
      this.objRef.showZ = value;
    }
  }

  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this.objRef) {
      this.objRef.mouseButtons = value;
    }
  }
}
