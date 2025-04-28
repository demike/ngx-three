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
import { MOUSE, Vector3 } from 'three';
import {
  TrackballControls,
  TrackballControlsEventMap,
} from 'three/examples/jsm/controls/TrackballControls.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-trackballControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTrackballControls),
    },
  ],
})
export class ThTrackballControls<
  T extends TrackballControls = TrackballControls,
  TARGS = [camera: Camera, domElement?: HTMLElement | null],
> extends ThControlBase<TrackballControlsEventMap, T, TARGS> {
  public getType(): Type<TrackballControls> {
    return TrackballControls;
  }

  @Input()
  public set screen(value: {
    left: number;
    top: number;
    width: number;
    height: number;
  }) {
    if (this._objRef) {
      this._objRef.screen = value;
    }
  }

  public get screen():
    | { left: number; top: number; width: number; height: number }
    | undefined {
    return this._objRef?.screen;
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
  public set zoomSpeed(value: number) {
    if (this._objRef) {
      this._objRef.zoomSpeed = value;
    }
  }

  public get zoomSpeed(): number | undefined {
    return this._objRef?.zoomSpeed;
  }
  @Input()
  public set panSpeed(value: number) {
    if (this._objRef) {
      this._objRef.panSpeed = value;
    }
  }

  public get panSpeed(): number | undefined {
    return this._objRef?.panSpeed;
  }
  @Input()
  public set noRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.noRotate = value;
    }
  }

  public get noRotate(): boolean | undefined {
    return this._objRef?.noRotate;
  }
  @Input()
  public set noZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.noZoom = value;
    }
  }

  public get noZoom(): boolean | undefined {
    return this._objRef?.noZoom;
  }
  @Input()
  public set noPan(value: boolean) {
    if (this._objRef) {
      this._objRef.noPan = value;
    }
  }

  public get noPan(): boolean | undefined {
    return this._objRef?.noPan;
  }
  @Input()
  public set staticMoving(value: boolean) {
    if (this._objRef) {
      this._objRef.staticMoving = value;
    }
  }

  public get staticMoving(): boolean | undefined {
    return this._objRef?.staticMoving;
  }
  @Input()
  public set dynamicDampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dynamicDampingFactor = value;
    }
  }

  public get dynamicDampingFactor(): number | undefined {
    return this._objRef?.dynamicDampingFactor;
  }
  @Input()
  public set minDistance(value: number) {
    if (this._objRef) {
      this._objRef.minDistance = value;
    }
  }

  public get minDistance(): number | undefined {
    return this._objRef?.minDistance;
  }
  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  public get maxDistance(): number | undefined {
    return this._objRef?.maxDistance;
  }
  @Input()
  public set minZoom(value: number) {
    if (this._objRef) {
      this._objRef.minZoom = value;
    }
  }

  public get minZoom(): number | undefined {
    return this._objRef?.minZoom;
  }
  @Input()
  public set maxZoom(value: number) {
    if (this._objRef) {
      this._objRef.maxZoom = value;
    }
  }

  public get maxZoom(): number | undefined {
    return this._objRef?.maxZoom;
  }
  @Input()
  public set keys(value: [string, string, string]) {
    if (this._objRef) {
      this._objRef.keys = value;
    }
  }

  public get keys(): [string, string, string] | undefined {
    return this._objRef?.keys;
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
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target = applyValue<Vector3>(this._objRef.target, value);
    }
  }
  public get target(): Vector3 | undefined {
    return this._objRef?.target;
  }
}
