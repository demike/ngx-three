import { Bone } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Object3D } from "three";

@Component({
  selector: "th-bone",
  inputs: ["isBone", "type"],
  template: "",
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }],
})
export class ThBone extends Bone {}
