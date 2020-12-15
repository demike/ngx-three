import { AudioListener } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Object3D } from "three";
import { AudioContext } from "three";

@Component({
  selector: "th-audioListener",
  inputs: ["type", "context", "gain", "filter", "timeDelta"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
  ],
})
export class ThAudioListener extends AudioListener {}
