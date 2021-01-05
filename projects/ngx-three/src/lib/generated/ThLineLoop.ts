import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { BufferGeometry, Geometry, LineLoop, Material } from "three";
import { ThLine } from "./ThLine";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-lineLoop",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
  ],
})
export class ThLineLoop<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry?: TGeometry, material?: TMaterial]
> extends ThLine<TGeometry, TMaterial, TARGS> {
  public obj!: LineLoop<TGeometry, TMaterial>;
  protected getType(): Type<LineLoop<TGeometry, TMaterial>> {
    return LineLoop;
  }

  @Input()
  public set type(value: "LineLoop") {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
