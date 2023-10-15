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
import { Camera, MOUSE, TOUCH, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-orbitControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThOrbitControls) },
  ],
})
export class ThOrbitControls<
  T extends OrbitControls = OrbitControls,
  TARGS = [object: Camera, domElement?: HTMLElement],
> extends ThControlBase<T, TARGS> {
  public getType(): Type<OrbitControls> {
    return OrbitControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  public get object(): Camera | undefined {
    return this._objRef?.object;
  }
  @Input()
  public set domElement(value: HTMLElement | Document) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  public get domElement(): (HTMLElement | Document) | undefined {
    return this._objRef?.domElement;
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
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target = applyValue<Vector3>(this._objRef.target, value);
    }
  }
  public get target(): Vector3 | undefined {
    return this._objRef?.target;
  }
  @Input()
  public set center(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector3>(this._objRef.center, value);
    }
  }
  public get center(): Vector3 | undefined {
    return this._objRef?.center;
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
  public set minPolarAngle(value: number) {
    if (this._objRef) {
      this._objRef.minPolarAngle = value;
    }
  }

  public get minPolarAngle(): number | undefined {
    return this._objRef?.minPolarAngle;
  }
  @Input()
  public set maxPolarAngle(value: number) {
    if (this._objRef) {
      this._objRef.maxPolarAngle = value;
    }
  }

  public get maxPolarAngle(): number | undefined {
    return this._objRef?.maxPolarAngle;
  }
  @Input()
  public set minAzimuthAngle(value: number) {
    if (this._objRef) {
      this._objRef.minAzimuthAngle = value;
    }
  }

  public get minAzimuthAngle(): number | undefined {
    return this._objRef?.minAzimuthAngle;
  }
  @Input()
  public set maxAzimuthAngle(value: number) {
    if (this._objRef) {
      this._objRef.maxAzimuthAngle = value;
    }
  }

  public get maxAzimuthAngle(): number | undefined {
    return this._objRef?.maxAzimuthAngle;
  }
  @Input()
  public set enableDamping(value: boolean) {
    if (this._objRef) {
      this._objRef.enableDamping = value;
    }
  }

  public get enableDamping(): boolean | undefined {
    return this._objRef?.enableDamping;
  }
  @Input()
  public set dampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dampingFactor = value;
    }
  }

  public get dampingFactor(): number | undefined {
    return this._objRef?.dampingFactor;
  }
  @Input()
  public set enableZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.enableZoom = value;
    }
  }

  public get enableZoom(): boolean | undefined {
    return this._objRef?.enableZoom;
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
  public set zoomToCursor(value: boolean) {
    if (this._objRef) {
      this._objRef.zoomToCursor = value;
    }
  }

  public get zoomToCursor(): boolean | undefined {
    return this._objRef?.zoomToCursor;
  }
  @Input()
  public set enableRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.enableRotate = value;
    }
  }

  public get enableRotate(): boolean | undefined {
    return this._objRef?.enableRotate;
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
  public set enablePan(value: boolean) {
    if (this._objRef) {
      this._objRef.enablePan = value;
    }
  }

  public get enablePan(): boolean | undefined {
    return this._objRef?.enablePan;
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
  public set screenSpacePanning(value: boolean) {
    if (this._objRef) {
      this._objRef.screenSpacePanning = value;
    }
  }

  public get screenSpacePanning(): boolean | undefined {
    return this._objRef?.screenSpacePanning;
  }
  @Input()
  public set keyPanSpeed(value: number) {
    if (this._objRef) {
      this._objRef.keyPanSpeed = value;
    }
  }

  public get keyPanSpeed(): number | undefined {
    return this._objRef?.keyPanSpeed;
  }
  @Input()
  public set autoRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.autoRotate = value;
    }
  }

  public get autoRotate(): boolean | undefined {
    return this._objRef?.autoRotate;
  }
  @Input()
  public set autoRotateSpeed(value: number) {
    if (this._objRef) {
      this._objRef.autoRotateSpeed = value;
    }
  }

  public get autoRotateSpeed(): number | undefined {
    return this._objRef?.autoRotateSpeed;
  }
  @Input()
  public set keys(value: {
    LEFT: string;
    UP: string;
    RIGHT: string;
    BOTTOM: string;
  }) {
    if (this._objRef) {
      this._objRef.keys = value;
    }
  }

  public get keys():
    | { LEFT: string; UP: string; RIGHT: string; BOTTOM: string }
    | undefined {
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
  public set touches(value: {
    ONE?: TOUCH | null | undefined;
    TWO?: TOUCH | null | undefined;
  }) {
    if (this._objRef) {
      this._objRef.touches = value;
    }
  }

  public get touches():
    | { ONE?: TOUCH | null | undefined; TWO?: TOUCH | null | undefined }
    | undefined {
    return this._objRef?.touches;
  }
  @Input()
  public set target0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target0 = applyValue<Vector3>(this._objRef.target0, value);
    }
  }
  public get target0(): Vector3 | undefined {
    return this._objRef?.target0;
  }
  @Input()
  public set position0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.position0 = applyValue<Vector3>(
        this._objRef.position0,
        value,
      );
    }
  }
  public get position0(): Vector3 | undefined {
    return this._objRef?.position0;
  }
  @Input()
  public set zoom0(value: number) {
    if (this._objRef) {
      this._objRef.zoom0 = value;
    }
  }

  public get zoom0(): number | undefined {
    return this._objRef?.zoom0;
  }
}
