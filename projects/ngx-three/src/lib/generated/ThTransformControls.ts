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
import { Camera, Event, MOUSE, Object3D } from 'three';
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
      useExisting: forwardRef(() => ThTransformControls),
    },
  ],
})
export class ThTransformControls<
  T extends TransformControls = TransformControls,
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set domElement(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set object(value: Object3D | undefined) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  @Input()
  public set axis(
    value: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null
  ) {
    if (this._objRef) {
      this._objRef.axis = value;
    }
  }

  @Input()
  public set mode(value: 'translate' | 'rotate' | 'scale') {
    if (this._objRef) {
      this._objRef.mode = value;
    }
  }

  @Input()
  public set translationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.translationSnap = value;
    }
  }

  @Input()
  public set rotationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.rotationSnap = value;
    }
  }

  @Input()
  public set space(value: 'world' | 'local') {
    if (this._objRef) {
      this._objRef.space = value;
    }
  }

  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  @Input()
  public set dragging(value: boolean) {
    if (this._objRef) {
      this._objRef.dragging = value;
    }
  }

  @Input()
  public set showX(value: boolean) {
    if (this._objRef) {
      this._objRef.showX = value;
    }
  }

  @Input()
  public set showY(value: boolean) {
    if (this._objRef) {
      this._objRef.showY = value;
    }
  }

  @Input()
  public set showZ(value: boolean) {
    if (this._objRef) {
      this._objRef.showZ = value;
    }
  }

  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this._objRef) {
      this._objRef.mouseButtons = value;
    }
  }
}
