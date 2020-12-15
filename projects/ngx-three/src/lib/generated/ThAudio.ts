import { Audio } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Object3D } from "three";
import { AudioListener } from "three";
import { AudioContext } from "three";

@Component({
  selector: "th-audio",
  inputs: [
    "type",
    "listener",
    "context",
    "gain",
    "autoplay",
    "buffer",
    "detune",
    "loop",
    "loopStart",
    "loopEnd",
    "offset",
    "duration",
    "playbackRate",
    "isPlaying",
    "hasPlaybackControl",
    "sourceType",
    "source",
    "filters",
  ],
  template: "",
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }],
})
export class ThAudio<
  NodeType extends AudioNode = GainNode
> extends Audio<NodeType> {
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
