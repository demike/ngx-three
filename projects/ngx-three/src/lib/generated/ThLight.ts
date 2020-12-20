import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { LightShadow } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { Light } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-light",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }],
})
export class ThLight<
  TARGS extends any[] = [hex: number | string, intensity: number]
> extends ThObject3D<TARGS> {
  protected obj!: Light;
  protected getObjectType(): Type<Light> {
    return Light;
  }
}
