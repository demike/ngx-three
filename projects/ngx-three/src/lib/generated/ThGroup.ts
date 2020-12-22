import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { Group } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-group",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGroup) }],
})
export class ThGroup<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: Group;
  protected getObjectType(): Type<Group> {
    return Group;
  }

  @Input()
  public set type(value: "Group") {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
