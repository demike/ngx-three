import { LOD } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Object3D } from "three";
import { Raycaster } from "three";
import { Camera } from "three";
import { Intersection } from "three";

@Component({
  selector: "th-lOD",
  inputs: ["type", "levels", "autoUpdate", "isLOD", "objects"],
  template: "",
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }],
})
export class ThLOD extends LOD {}
