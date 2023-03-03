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
import { Camera, MOUSE, Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-transformControlsGen',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTransformControlsGen),
    },
  ],
})
export class ThTransformControlsGen<
  T extends TransformControls = TransformControls,
  TARGS = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set domElement(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  // @ts-ignore
  public get domElement(): HTMLElement | undefined {
    return this._objRef?.domElement;
  }
  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  // @ts-ignore
  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set object(value: Object3D | undefined) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  // @ts-ignore
  public get object(): (Object3D | undefined) | undefined {
    return this._objRef?.object;
  }
  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  // @ts-ignore
  public get enabled(): boolean | undefined {
    return this._objRef?.enabled;
  }
  @Input()
  public set axis(
    value: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null
  ) {
    if (this._objRef) {
      this._objRef.axis = value;
    }
  }

  // @ts-ignore
  public get axis():
    | ('X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null)
    | undefined {
    return this._objRef?.axis;
  }
  @Input()
  public set mode(value: 'translate' | 'rotate' | 'scale') {
    if (this._objRef) {
      this._objRef.mode = value;
    }
  }

  // @ts-ignore
  public get mode(): ('translate' | 'rotate' | 'scale') | undefined {
    return this._objRef?.mode;
  }
  @Input()
  public set translationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.translationSnap = value;
    }
  }

  // @ts-ignore
  public get translationSnap(): (number | null) | undefined {
    return this._objRef?.translationSnap;
  }
  @Input()
  public set rotationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.rotationSnap = value;
    }
  }

  // @ts-ignore
  public get rotationSnap(): (number | null) | undefined {
    return this._objRef?.rotationSnap;
  }
  @Input()
  public set space(value: 'world' | 'local') {
    if (this._objRef) {
      this._objRef.space = value;
    }
  }

  // @ts-ignore
  public get space(): ('world' | 'local') | undefined {
    return this._objRef?.space;
  }
  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  // @ts-ignore
  public get size(): number | undefined {
    return this._objRef?.size;
  }
  @Input()
  public set dragging(value: boolean) {
    if (this._objRef) {
      this._objRef.dragging = value;
    }
  }

  // @ts-ignore
  public get dragging(): boolean | undefined {
    return this._objRef?.dragging;
  }
  @Input()
  public set showX(value: boolean) {
    if (this._objRef) {
      this._objRef.showX = value;
    }
  }

  // @ts-ignore
  public get showX(): boolean | undefined {
    return this._objRef?.showX;
  }
  @Input()
  public set showY(value: boolean) {
    if (this._objRef) {
      this._objRef.showY = value;
    }
  }

  // @ts-ignore
  public get showY(): boolean | undefined {
    return this._objRef?.showY;
  }
  @Input()
  public set showZ(value: boolean) {
    if (this._objRef) {
      this._objRef.showZ = value;
    }
  }

  // @ts-ignore
  public get showZ(): boolean | undefined {
    return this._objRef?.showZ;
  }
  // @ts-ignore
  public get isTransformControls(): true | undefined {
    return this._objRef?.isTransformControls;
  }
  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this._objRef) {
      this._objRef.mouseButtons = value;
    }
  }

  // @ts-ignore
  public get mouseButtons():
    | {
        LEFT: MOUSE;
        MIDDLE: MOUSE;
        RIGHT: MOUSE;
      }
    | undefined {
    return this._objRef?.mouseButtons;
  }
}
