import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Line } from "three";
import { Geometry } from "three";
import { Material } from "three";
import { BufferGeometry } from "three";
import { ThLine } from "./ThLine";
import { LineLoop } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-lineLoop",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
  ],
})
export class ThLineLoop<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial]
> extends ThLine<TGeometry, TMaterial, TARGS> {
  protected obj!: LineLoop<TGeometry, TMaterial>;
  protected getObjectType(): Type<LineLoop<TGeometry, TMaterial>> {
    return LineLoop;
  }

  @Input()
  public set type(value: "LineLoop") {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
