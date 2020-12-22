import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { Color, PointLight, PointLightShadow } from "three";
import { ThLight } from "./ThLight";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-pointLight",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) },
  ],
})
export class ThPointLight<
  TARGS extends any[] = [
    color: Color | string | number,
    intensity: number,
    distance: number,
    decay: number
  ]
> extends ThLight<TARGS> {
  protected obj!: PointLight;
  protected getObjectType(): Type<PointLight> {
    return PointLight;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
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
  public set decay(value: number) {
    if (this.obj) {
      this.obj.decay = value;
    }
  }

  @Input()
  public set shadow(value: PointLightShadow) {
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
}
