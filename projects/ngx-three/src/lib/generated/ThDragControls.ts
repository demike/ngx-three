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
import { Camera, Object3D, Raycaster } from 'three';
import {
  DragControls,
  DragControlsMode,
} from 'three/examples/jsm/controls/DragControls';
import { ThControlBase } from '../ThControlBase';

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
  TARGS = [objects: Object3D[], camera: Camera, domElement?: HTMLElement],
> extends ThControlBase<T, TARGS> {
  public getType(): Type<DragControls> {
    return DragControls;
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
  public set mode(value: DragControlsMode) {
    if (this._objRef) {
      this._objRef.mode = value;
    }
  }

  public get mode(): DragControlsMode | undefined {
    return this._objRef?.mode;
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
  public set activate(value: () => void) {
    if (this._objRef) {
      this._objRef.activate = value;
    }
  }

  public get activate(): (() => void) | undefined {
    return this._objRef?.activate;
  }
  @Input()
  public set deactivate(value: () => void) {
    if (this._objRef) {
      this._objRef.deactivate = value;
    }
  }

  public get deactivate(): (() => void) | undefined {
    return this._objRef?.deactivate;
  }
  @Input()
  public set dispose(value: () => void) {
    if (this._objRef) {
      this._objRef.dispose = value;
    }
  }

  public get dispose(): (() => void) | undefined {
    return this._objRef?.dispose;
  }
  @Input()
  public set getObjects(value: () => Object3D[]) {
    if (this._objRef) {
      this._objRef.getObjects = value;
    }
  }

  public get getObjects(): (() => Object3D[]) | undefined {
    return this._objRef?.getObjects;
  }
  @Input()
  public set getRaycaster(value: () => Raycaster) {
    if (this._objRef) {
      this._objRef.getRaycaster = value;
    }
  }

  public get getRaycaster(): (() => Raycaster) | undefined {
    return this._objRef?.getRaycaster;
  }
  @Input()
  public set setObjects(value: (objects: readonly Object3D[]) => void) {
    if (this._objRef) {
      this._objRef.setObjects = value;
    }
  }

  public get setObjects():
    | ((objects: readonly Object3D[]) => void)
    | undefined {
    return this._objRef?.setObjects;
  }
}
