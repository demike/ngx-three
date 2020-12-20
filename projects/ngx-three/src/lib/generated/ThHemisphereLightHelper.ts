import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { HemisphereLight } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { MeshBasicMaterial } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { HemisphereLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-hemisphereLightHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightHelper),
    },
  ],
})
export class ThHemisphereLightHelper<
  TARGS extends any[] = [
    light: HemisphereLight,
    size: number,
    color: Color | number | string
  ]
> extends ThObject3D<TARGS> {
  protected obj!: HemisphereLightHelper;
  protected getObjectType(): Type<HemisphereLightHelper> {
    return HemisphereLightHelper;
  }
}
