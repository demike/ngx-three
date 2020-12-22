import { Input } from "@angular/core";
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

  @Input()
  public set type(value: "LOD") {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set levels(value: { distance: number; object: Object3D }[]) {
    if (this.obj) {
      this.obj.levels = value;
    }
  }

  @Input()
  public set autoUpdate(value: boolean) {
    if (this.obj) {
      this.obj.autoUpdate = value;
    }
  }

  @Input()
  public set objects(value: any[]) {
    if (this.obj) {
      this.obj.objects = value;
    }
  }
}
