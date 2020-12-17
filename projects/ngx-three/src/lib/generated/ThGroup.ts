import { Group } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-group",
  inputs: ["type", "isGroup"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGroup) }],
})
export class ThGroup<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: Group;
  protected getObjectType(): Type<Group> {
    return Group;
  }
}
