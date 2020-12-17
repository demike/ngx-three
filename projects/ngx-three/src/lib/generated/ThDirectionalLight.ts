import { DirectionalLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Object3D } from "three";
import { DirectionalLightShadow } from "three";
import { Light } from "three";
import { Vector3 } from "three";
import { ThLight } from "./ThLight";

@Component({
  selector: "th-directionalLight",
  inputs: ["type", "target", "intensity", "shadow", "isDirectionalLight"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
  ],
})
export class ThDirectionalLight<
  TARGS extends any[] = [color: Color | string | number, intensity: number]
> extends ThLight<TARGS> {
  protected obj!: DirectionalLight;
  protected getObjectType(): Type<DirectionalLight> {
    return DirectionalLight;
  }

  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.position = applyValue<Vector3>(this.obj.position, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
