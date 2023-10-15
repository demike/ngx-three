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
import { Camera, MOUSE, Object3D } from 'three';
import {
  TransformControls,
  TransformControlsEventMap,
} from 'three/examples/jsm/controls/TransformControls';
import { ThControlBase } from '../ThControlBase';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-transformControlsGen',
  template: '<ng-content/>',
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
  TARGS = [object: Camera, domElement?: HTMLElement],
> extends ThObject3D<TransformControlsEventMap, T, TARGS> {
  public getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set domElement(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  public get domElement(): HTMLElement | undefined {
    return this._objRef?.domElement;
  }
  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set object(value: Object3D | undefined) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  public get object(): (Object3D | undefined) | undefined {
    return this._objRef?.object;
  }
  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  public get enabled(): boolean | undefined {
    return this._objRef?.enabled;
  }
  @Input()
  public set axis(
    value: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null,
  ) {
    if (this._objRef) {
      this._objRef.axis = value;
    }
  }

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

  public get mode(): ('translate' | 'rotate' | 'scale') | undefined {
    return this._objRef?.mode;
  }
  @Input()
  public set translationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.translationSnap = value;
    }
  }

  public get translationSnap(): (number | null) | undefined {
    return this._objRef?.translationSnap;
  }
  @Input()
  public set rotationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.rotationSnap = value;
    }
  }

  public get rotationSnap(): (number | null) | undefined {
    return this._objRef?.rotationSnap;
  }
  @Input()
  public set space(value: 'world' | 'local') {
    if (this._objRef) {
      this._objRef.space = value;
    }
  }

  public get space(): ('world' | 'local') | undefined {
    return this._objRef?.space;
  }
  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  public get size(): number | undefined {
    return this._objRef?.size;
  }
  @Input()
  public set dragging(value: boolean) {
    if (this._objRef) {
      this._objRef.dragging = value;
    }
  }

  public get dragging(): boolean | undefined {
    return this._objRef?.dragging;
  }
  @Input()
  public set showX(value: boolean) {
    if (this._objRef) {
      this._objRef.showX = value;
    }
  }

  public get showX(): boolean | undefined {
    return this._objRef?.showX;
  }
  @Input()
  public set showY(value: boolean) {
    if (this._objRef) {
      this._objRef.showY = value;
    }
  }

  public get showY(): boolean | undefined {
    return this._objRef?.showY;
  }
  @Input()
  public set showZ(value: boolean) {
    if (this._objRef) {
      this._objRef.showZ = value;
    }
  }

  public get showZ(): boolean | undefined {
    return this._objRef?.showZ;
  }
  public get isTransformControls(): true | undefined {
    return this._objRef?.isTransformControls;
  }
  @Input()
  public set mouseButtons(value: {
    LEFT?: MOUSE | null | undefined;
    MIDDLE?: MOUSE | null | undefined;
    RIGHT?: MOUSE | null | undefined;
  }) {
    if (this._objRef) {
      this._objRef.mouseButtons = value;
    }
  }

  public get mouseButtons():
    | {
        LEFT?: MOUSE | null | undefined;
        MIDDLE?: MOUSE | null | undefined;
        RIGHT?: MOUSE | null | undefined;
      }
    | undefined {
    return this._objRef?.mouseButtons;
  }
}
