import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { AudioContext } from "three";
import { ThObject3D } from "./ThObject3D";
import { AudioListener } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-audioListener",
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
