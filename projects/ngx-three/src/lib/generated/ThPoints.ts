import { Points } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { BufferGeometry } from "three";
import { Intersection } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-points",
  inputs: [
    "type",
    "morphTargetInfluences",
    "morphTargetDictionary",
    "isPoints",
    "geometry",
    "material",
  ],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }],
})
export class ThPoints<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial]
> extends ThObject3D<TARGS> {
  protected obj!: Points;
  protected getObjectType(): Type<Points> {
    return Points;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
