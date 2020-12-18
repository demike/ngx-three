import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";
import { AmbientLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-ambientLight",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLight) },
  ],
})
export class ThAmbientLight<
  TARGS extends any[] = [color: Color | string | number, intensity: number]
> extends ThLight<TARGS> {
  protected obj!: AmbientLight;
  protected getObjectType(): Type<AmbientLight> {
    return AmbientLight;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
