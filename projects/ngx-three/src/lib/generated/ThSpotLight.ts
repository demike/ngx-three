import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";
import { SpotLightShadow } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";
import { SpotLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-spotLight",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
  ],
})
export class ThSpotLight<
  TARGS extends any[] = [
    color: Color | string | number,
    intensity: number,
    distance: number,
    angle: number,
    penumbra: number,
    decay: number
  ]
> extends ThLight<TARGS> {
  protected obj!: SpotLight;
  protected getObjectType(): Type<SpotLight> {
    return SpotLight;
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
  public set distance(value: number) {
    if (this.obj) {
      this.obj.distance = value;
    }
  }

  @Input()
  public set angle(value: number) {
    if (this.obj) {
      this.obj.angle = value;
    }
  }

  @Input()
  public set decay(value: number) {
    if (this.obj) {
      this.obj.decay = value;
    }
  }

  @Input()
  public set shadow(value: SpotLightShadow) {
    if (this.obj) {
      this.obj.shadow = value;
    }
  }

  @Input()
  public set power(value: number) {
    if (this.obj) {
      this.obj.power = value;
    }
  }

  @Input()
  public set penumbra(value: number) {
    if (this.obj) {
      this.obj.penumbra = value;
    }
  }
}
