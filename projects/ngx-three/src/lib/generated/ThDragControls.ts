/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera, Object3D } from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-dragControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThDragControls) },
  ],
})
export class ThDragControls<
  T extends DragControls = DragControls,
  TARGS extends any[] = [
    objects: Object3D[],
    camera: Camera,
    domElement?: HTMLElement
  ]
> extends ThControlBase<T, TARGS> {
  protected getType(): Type<DragControls> {
    return DragControls;
  }

  @Input()
  public set object(value: Camera) {
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
  public set transformGroup(value: boolean) {
    if (this._objRef) {
      this._objRef.transformGroup = value;
    }
  }
}
