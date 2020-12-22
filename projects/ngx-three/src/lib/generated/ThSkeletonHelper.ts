import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import {
  Bone,
  BufferGeometry,
  Geometry,
  Material,
  Matrix4,
  Object3D,
  SkeletonHelper,
} from "three";
import { applyValue } from "../util";
import { ThLineSegments } from "./ThLineSegments";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-skeletonHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
  ],
})
export class ThSkeletonHelper<
  TARGS extends any[] = [object: Object3D]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: SkeletonHelper;
  protected getObjectType(): Type<SkeletonHelper> {
    return SkeletonHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set bones(value: Bone[]) {
    if (this.obj) {
      this.obj.bones = value;
    }
  }

  @Input()
  public set root(value: Object3D) {
    if (this.obj) {
      this.obj.root = value;
    }
  }

  @Input()
  public set matrix(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number
        ]
  ) {
    if (this.obj) {
      this.obj.matrix = applyValue<Matrix4>(this.obj.matrix, value);
    }
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this.obj) {
      this.obj.matrixAutoUpdate = value;
    }
  }
}
