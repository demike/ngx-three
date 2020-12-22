import { Input } from "@angular/core";
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

  @Input()
  public set type(value: "AudioListener") {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set context(value: AudioContext) {
    if (this.obj) {
      this.obj.context = value;
    }
  }

  @Input()
  public set gain(value: GainNode) {
    if (this.obj) {
      this.obj.gain = value;
    }
  }

  @Input()
  public set filter(value: null | any) {
    if (this.obj) {
      this.obj.filter = value;
    }
  }

  @Input()
  public set timeDelta(value: number) {
    if (this.obj) {
      this.obj.timeDelta = value;
    }
  }
}
