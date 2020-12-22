import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Light } from "three";
import { Color } from "three";
import { ThLight } from "./ThLight";
import { RectAreaLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-rectAreaLight",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
  ],
})
export class ThRectAreaLight<
  TARGS extends any[] = [
    color: Color | string | number,
    intensity: number,
    width: number,
    height: number
  ]
> extends ThLight<TARGS> {
  protected obj!: RectAreaLight;
  protected getObjectType(): Type<RectAreaLight> {
    return RectAreaLight;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set width(value: number) {
    if (this.obj) {
      this.obj.width = value;
    }
  }

  @Input()
  public set height(value: number) {
    if (this.obj) {
      this.obj.height = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this.obj) {
      this.obj.intensity = value;
    }
  }
}
