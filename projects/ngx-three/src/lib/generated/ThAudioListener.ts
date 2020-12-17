import { AudioListener } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { AudioContext } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-audioListener",
  inputs: ["type", "context", "gain", "filter", "timeDelta"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
  ],
})
export class ThAudioListener<
  TARGS extends any[] = []
> extends ThObject3D<TARGS> {
  protected obj!: AudioListener;
  protected getObjectType(): Type<AudioListener> {
    return AudioListener;
  }
}
