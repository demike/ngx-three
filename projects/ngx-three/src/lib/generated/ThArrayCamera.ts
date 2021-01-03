import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { ArrayCamera, PerspectiveCamera } from "three";
import { ThObject3D } from "./ThObject3D";
import { ThPerspectiveCamera } from "./ThPerspectiveCamera";

@Component({
  selector: "th-arrayCamera",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
  ],
})
export class ThArrayCamera<
  TARGS extends any[] = [cameras: PerspectiveCamera[]]
> extends ThPerspectiveCamera<TARGS> {
  public obj!: ArrayCamera;
  protected getObjectType(): Type<ArrayCamera> {
    return ArrayCamera;
  }

  @Input()
  public set cameras(value: PerspectiveCamera[]) {
    if (this.obj) {
      this.obj.cameras = value;
    }
  }
}
