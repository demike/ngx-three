import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { BufferGeometry, Geometry, Material, Plane, PlaneHelper } from "three";
import { applyValue } from "../util";
import { ThLineSegments } from "./ThLineSegments";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-planeHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
  ],
})
export class ThPlaneHelper<
  TARGS extends any[] = [plane: Plane, size: number, hex: number]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: PlaneHelper;
  protected getObjectType(): Type<PlaneHelper> {
    return PlaneHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set plane(value: Plane | [normal: Vector3, constant: number]) {
    if (this.obj) {
      this.obj.plane = applyValue<Plane>(this.obj.plane, value);
    }
  }
  @Input()
  public set size(value: number) {
    if (this.obj) {
      this.obj.size = value;
    }
  }
}
