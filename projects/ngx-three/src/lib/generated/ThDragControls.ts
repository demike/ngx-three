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
  TARGS extends any[] = [
    objects: Object3D[],
    camera: Camera,
    domElement?: HTMLElement
  ]
> extends ThControlBase<TARGS> {
  @Input()
  public obj!: DragControls;
  protected getType(): Type<DragControls> {
    return DragControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.obj) {
      this.obj.object = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this.obj) {
      this.obj.enabled = value;
    }
  }

  @Input()
  public set transformGroup(value: boolean) {
    if (this.obj) {
      this.obj.transformGroup = value;
    }
  }
}
