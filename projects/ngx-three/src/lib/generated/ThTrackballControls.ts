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
import { Camera, MOUSE, Vector3 } from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-trackballControls',
  template: '',
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
  TARGS = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<TrackballControls> {
    return TrackballControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  // @ts-ignore
  public get object(): Camera | undefined {
    return this._objRef?.object;
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

  // @ts-ignore
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

  // @ts-ignore
  public get rotateSpeed(): number | undefined {
    return this._objRef?.rotateSpeed;
  }
  @Input()
  public set zoomSpeed(value: number) {
    if (this._objRef) {
      this._objRef.zoomSpeed = value;
    }
  }

  // @ts-ignore
  public get zoomSpeed(): number | undefined {
    return this._objRef?.zoomSpeed;
  }
  @Input()
  public set panSpeed(value: number) {
    if (this._objRef) {
      this._objRef.panSpeed = value;
    }
  }

  // @ts-ignore
  public get panSpeed(): number | undefined {
    return this._objRef?.panSpeed;
  }
  @Input()
  public set noRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.noRotate = value;
    }
  }

  // @ts-ignore
  public get noRotate(): boolean | undefined {
    return this._objRef?.noRotate;
  }
  @Input()
  public set noZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.noZoom = value;
    }
  }

  // @ts-ignore
  public get noZoom(): boolean | undefined {
    return this._objRef?.noZoom;
  }
  @Input()
  public set noPan(value: boolean) {
    if (this._objRef) {
      this._objRef.noPan = value;
    }
  }

  // @ts-ignore
  public get noPan(): boolean | undefined {
    return this._objRef?.noPan;
  }
  @Input()
  public set noRoll(value: boolean) {
    if (this._objRef) {
      this._objRef.noRoll = value;
    }
  }

  // @ts-ignore
  public get noRoll(): boolean | undefined {
    return this._objRef?.noRoll;
  }
  @Input()
  public set staticMoving(value: boolean) {
    if (this._objRef) {
      this._objRef.staticMoving = value;
    }
  }

  // @ts-ignore
  public get staticMoving(): boolean | undefined {
    return this._objRef?.staticMoving;
  }
  @Input()
  public set dynamicDampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dynamicDampingFactor = value;
    }
  }

  // @ts-ignore
  public get dynamicDampingFactor(): number | undefined {
    return this._objRef?.dynamicDampingFactor;
  }
  @Input()
  public set minDistance(value: number) {
    if (this._objRef) {
      this._objRef.minDistance = value;
    }
  }

  // @ts-ignore
  public get minDistance(): number | undefined {
    return this._objRef?.minDistance;
  }
  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  // @ts-ignore
  public get maxDistance(): number | undefined {
    return this._objRef?.maxDistance;
  }
  @Input()
  public set keys(value: string[]) {
    if (this._objRef) {
      this._objRef.keys = value;
    }
  }

  // @ts-ignore
  public get keys(): string[] | undefined {
    return this._objRef?.keys;
  }
  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this._objRef) {
      this._objRef.mouseButtons = value;
    }
  }

  // @ts-ignore
  public get mouseButtons():
    | { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }
    | undefined {
    return this._objRef?.mouseButtons;
  }
  @Input()
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target = applyValue<Vector3>(this._objRef.target, value);
    }
  }
  // @ts-ignore
  public get target(): Vector3 | undefined {
    return this._objRef?.target;
  }
  @Input()
  public set position0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.position0 = applyValue<Vector3>(
        this._objRef.position0,
        value
      );
    }
  }
  // @ts-ignore
  public get position0(): Vector3 | undefined {
    return this._objRef?.position0;
  }
  @Input()
  public set target0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target0 = applyValue<Vector3>(this._objRef.target0, value);
    }
  }
  // @ts-ignore
  public get target0(): Vector3 | undefined {
    return this._objRef?.target0;
  }
  @Input()
  public set up0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.up0 = applyValue<Vector3>(this._objRef.up0, value);
    }
  }
  // @ts-ignore
  public get up0(): Vector3 | undefined {
    return this._objRef?.up0;
  }
}
