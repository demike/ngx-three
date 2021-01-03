import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { AxesHelper, BufferGeometry, Geometry, Material } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-axesHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
  ],
})
export class ThAxesHelper<
  TARGS extends any[] = [size: number]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  public obj!: AxesHelper;
  protected getObjectType(): Type<AxesHelper> {
    return AxesHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
