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
import { Camera, Object3D } from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
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
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  public get object(): Camera | undefined {
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
}
