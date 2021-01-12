import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Host,
  Input,
  Type,
} from '@angular/core';
import { Camera, Object3D } from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { ThCanvas } from '../ThCanvas';
import { ThControlBase } from '../ThControlBase';
import { ThCamera } from './ThCamera';

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

  constructor(@Host() camera: ThCamera, public canvas: ThCanvas) {
    super(camera);
  }

  protected createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this.camera, this.canvas];
    }
    super.createThreeInstance(args);
  }
}
