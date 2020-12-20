import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { AudioListener } from "three";
import { Audio } from "three";
import { ThAudio } from "./ThAudio";
import { PositionalAudio } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-positionalAudio",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
  ],
})
export class ThPositionalAudio<
  TARGS extends any[] = [listener: AudioListener]
> extends ThAudio<PannerNode, TARGS> {
  protected obj!: PositionalAudio;
  protected getObjectType(): Type<PositionalAudio> {
    return PositionalAudio;
  }
}
