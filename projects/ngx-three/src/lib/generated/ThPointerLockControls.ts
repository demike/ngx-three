// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera } from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { ThControlBase } from '../ThControlBase';

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
  @Input()
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
}
