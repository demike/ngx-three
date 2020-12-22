import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Vector3 } from "three";
import { Line } from "three";
import { Mesh } from "three";
import { Color } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { ArrowHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-arrowHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
  ],
})
export class ThArrowHelper<
  TARGS extends any[] = [
    dir: Vector3,
    origin: Vector3,
    length: number,
    color: Color | string | number,
    headLength: number,
    headWidth: number
  ]
> extends ThObject3D<TARGS> {
  protected obj!: ArrowHelper;
  protected getObjectType(): Type<ArrowHelper> {
    return ArrowHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set line(value: Line) {
    if (this.obj) {
      this.obj.line = value;
    }
  }

  @Input()
  public set cone(value: Mesh) {
    if (this.obj) {
      this.obj.cone = value;
    }
  }
}
