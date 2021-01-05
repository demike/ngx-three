import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import {
  BoxHelper,
  BufferGeometry,
  Color,
  Geometry,
  Material,
  Object3D,
} from "three";
import { ThLineSegments } from "./ThLineSegments";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-boxHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
  ],
})
export class ThBoxHelper<
  TARGS extends any[] = [object: Object3D, color?: Color | string | number]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  public obj!: BoxHelper;
  protected getType(): Type<BoxHelper> {
    return BoxHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
