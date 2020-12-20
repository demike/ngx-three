import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { BufferGeometry } from "three";
import { Intersection } from "three";
import { ThObject3D } from "./ThObject3D";
import { Line } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-line",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }],
})
export class ThLine<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial, mode: number]
> extends ThObject3D<TARGS> {
  protected obj!: Line<TGeometry, TMaterial>;
  protected getObjectType(): Type<Line<TGeometry, TMaterial>> {
    return Line;
  }
}
