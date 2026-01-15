/* eslint-disable @typescript-eslint/ban-types */
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
import { MOUSE, Raycaster, TOUCH } from 'three';
import {
  DragControls,
  DragControlsEventMap,
} from 'three/examples/jsm/controls/DragControls.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-dragControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThDragControls) },
  ],
})
export class ThDragControls<
  T extends DragControls = DragControls,
  TARGS = [
    objects: Object3D[],
    camera: Camera,
    domElement?: HTMLElement | SVGElement | null,
  ],
> extends ThControlBase<DragControlsEventMap, T, TARGS> {
  public getType(): Type<DragControls> {
    return DragControls;
  }

  @Input()
  public set objects(value: Object3D[]) {
    if (this._objRef) {
      this._objRef.objects = value;
    }
  }

  public get objects(): Object3D[] | undefined {
    return this._objRef?.objects;
  }
  @Input()
  public set recursive(value: boolean) {
    if (this._objRef) {
      this._objRef.recursive = value;
    }
  }

  public get recursive(): boolean | undefined {
    return this._objRef?.recursive;
  }
  @Input()
  public set transformGroup(value: boolean) {
    if (this._objRef) {
      this._objRef.transformGroup = value;
    }
  }

  public get transformGroup(): boolean | undefined {
    return this._objRef?.transformGroup;
  }
  @Input()
  public set rotateSpeed(value: number) {
    if (this._objRef) {
      this._objRef.rotateSpeed = value;
    }
  }

  public get rotateSpeed(): number | undefined {
    return this._objRef?.rotateSpeed;
  }
  @Input()
  public set raycaster(
    value: Raycaster | [origin: Vector3, direction: Vector3],
  ) {
    if (this._objRef) {
      this._objRef.raycaster = applyValue<Raycaster>(
        this._objRef.raycaster,
        value,
      );
    }
  }
  public get raycaster(): Raycaster | undefined {
    return this._objRef?.raycaster;
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
  @Input()
  public set touches(value: { ONE?: TOUCH | null | undefined }) {
    if (this._objRef) {
      this._objRef.touches = value;
    }
  }

  public get touches(): { ONE?: TOUCH | null | undefined } | undefined {
    return this._objRef?.touches;
  }
}
