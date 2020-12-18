import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { AudioListener } from "three";
import { AudioContext } from "three";
import { ThObject3D } from "./ThObject3D";
import { Audio } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-audio",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }],
})
export class ThAudio<
  NodeType extends AudioNode = GainNode,
  TARGS extends any[] = [listener: AudioListener]
> extends ThObject3D<TARGS> {
  protected obj!: Audio;
  protected getObjectType(): Type<Audio> {
    return Audio;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
