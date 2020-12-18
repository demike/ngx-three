import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { Bone } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-bone",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }],
})
export class ThBone<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: Bone;
  protected getObjectType(): Type<Bone> {
    return Bone;
  }
}
