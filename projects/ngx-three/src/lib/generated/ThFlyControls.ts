import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Host,
  Input,
  Type,
} from "@angular/core";
import { Camera } from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { ThCanvas } from "../ThCanvas";
import { ThControlBase } from "../ThControlBase";
import { ThCamera } from "./ThCamera";

@Component({
  selector: "th-flyControls",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
  ],
})
export class ThFlyControls<
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<TARGS> {
  public obj!: FlyControls;
  protected getType(): Type<FlyControls> {
    return FlyControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.obj) {
      this.obj.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement | HTMLDocument) {
    if (this.obj) {
      this.obj.domElement = value;
    }
  }

  @Input()
  public set movementSpeed(value: number) {
    if (this.obj) {
      this.obj.movementSpeed = value;
    }
  }

  @Input()
  public set rollSpeed(value: number) {
    if (this.obj) {
      this.obj.rollSpeed = value;
    }
  }

  @Input()
  public set dragToLook(value: boolean) {
    if (this.obj) {
      this.obj.dragToLook = value;
    }
  }

  @Input()
  public set autoForward(value: boolean) {
    if (this.obj) {
      this.obj.autoForward = value;
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
