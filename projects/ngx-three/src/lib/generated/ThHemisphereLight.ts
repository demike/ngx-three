import { HemisphereLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";

@Component({
  selector: "th-hemisphereLight",
  inputs: ["type", "isHemisphereLight"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
  ],
})
export class ThHemisphereLight<
  TARGS extends any[] = [
    skyColor: Color | string | number,
    groundColor: Color | string | number,
    intensity: number
  ]
> extends ThLight<TARGS> {
  protected obj!: HemisphereLight;
  protected getObjectType(): Type<HemisphereLight> {
    return HemisphereLight;
  }

  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.position = applyValue<Vector3>(this.obj.position, value);
    }
  }
  @Input()
  public set groundColor(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.groundColor = applyValue<Color>(this.obj.groundColor, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
