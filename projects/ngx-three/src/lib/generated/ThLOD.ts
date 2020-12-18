import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { Raycaster } from "three";
import { Camera } from "three";
import { Intersection } from "three";
import { ThObject3D } from "./ThObject3D";
import { LOD } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-lOD",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }],
})
export class ThLOD<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: LOD;
  protected getObjectType(): Type<LOD> {
    return LOD;
  }
}
