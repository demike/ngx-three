import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import {
  Box3,
  Box3Helper,
  BufferGeometry,
  Color,
  Geometry,
  Material,
  Vector3,
} from "three";
import { applyValue } from "../util";
import { ThLineSegments } from "./ThLineSegments";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-box3Helper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
  ],
})
export class ThBox3Helper<
  TARGS extends any[] = [box: Box3, color: Color]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: Box3Helper;
  protected getObjectType(): Type<Box3Helper> {
    return Box3Helper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set box(value: Box3 | [min: Vector3, max: Vector3]) {
    if (this.obj) {
      this.obj.box = applyValue<Box3>(this.obj.box, value);
    }
  }
}
