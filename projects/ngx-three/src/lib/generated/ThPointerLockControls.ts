import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Host,
  Input,
  Type,
} from '@angular/core';
import { Camera } from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { ThCanvas } from '../ThCanvas';
import { ThControlBase } from '../ThControlBase';
import { ThCamera } from './ThCamera';

@Component({
  selector: 'th-pointerLockControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThPointerLockControls),
    },
  ],
})
export class ThPointerLockControls<
  TARGS extends any[] = [camera: Camera, domElement?: HTMLElement]
> extends ThControlBase<TARGS> {
  public obj!: PointerLockControls;
  protected getType(): Type<PointerLockControls> {
    return PointerLockControls;
  }

  @Input()
  public set domElement(value: HTMLElement) {
    if (this.obj) {
      this.obj.domElement = value;
    }
  }

  @Input()
  public set isLocked(value: boolean) {
    if (this.obj) {
      this.obj.isLocked = value;
    }
  }

  @Input()
  public set minPolarAngle(value: number) {
    if (this.obj) {
      this.obj.minPolarAngle = value;
    }
  }

  @Input()
  public set maxPolarAngle(value: number) {
    if (this.obj) {
      this.obj.maxPolarAngle = value;
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
