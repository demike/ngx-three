import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { BufferGeometry, Geometry, LineSegments, Material } from "three";
import { ThLine } from "./ThLine";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-lineSegments",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
  ],
})
export class ThLineSegments<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial]
> extends ThLine<TGeometry, TMaterial, TARGS> {
  public obj!: LineSegments<TGeometry, TMaterial>;
  protected getType(): Type<LineSegments<TGeometry, TMaterial>> {
    return LineSegments;
  }

  @Input()
  public set type(value: "LineSegments" | string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
