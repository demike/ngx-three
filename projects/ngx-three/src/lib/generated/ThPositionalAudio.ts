import { PositionalAudio } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { AudioListener } from "three";
import { Audio } from "three";

@Component({
  selector: "th-positionalAudio",
  inputs: ["panner"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
  ],
})
export class ThPositionalAudio extends PositionalAudio {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[listener: AudioListener]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [listener: AudioListener]) {
    /* nothing to do */
  }
}
