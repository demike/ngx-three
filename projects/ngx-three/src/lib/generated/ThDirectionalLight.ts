import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Object3D } from "three";
import { DirectionalLightShadow } from "three";
import { Light } from "three";
import { Vector3 } from "three";
import { ThLight } from "./ThLight";
import { DirectionalLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-directionalLight",
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
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.position = applyValue<Vector3>(this.obj.position, value);
    }
  }
  @Input()
  public set target(value: Object3D) {
    if (this.obj) {
      this.obj.target = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this.obj) {
      this.obj.intensity = value;
    }
  }

  @Input()
  public set shadow(value: DirectionalLightShadow) {
    if (this.obj) {
      this.obj.shadow = value;
    }
  }
}
