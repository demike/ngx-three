import { Mesh } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { BufferGeometry } from "three";
import { Intersection } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-mesh",
  inputs: [
    "geometry",
    "material",
    "morphTargetInfluences",
    "morphTargetDictionary",
    "isMesh",
    "type",
  ],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThMesh) }],
})
export class ThMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial]
> extends ThObject3D<TARGS> {
  protected obj!: Mesh;
  protected getObjectType(): Type<Mesh> {
    return Mesh;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
