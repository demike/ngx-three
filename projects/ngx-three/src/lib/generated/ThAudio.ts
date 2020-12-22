import { Input } from "@angular/core";
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
  protected obj!: Audio<NodeType>;
  protected getObjectType(): Type<Audio<NodeType>> {
    return Audio;
  }

  @Input()
  public set type(value: "Audio") {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set listener(value: AudioListener) {
    if (this.obj) {
      this.obj.listener = value;
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
  public set autoplay(value: boolean) {
    if (this.obj) {
      this.obj.autoplay = value;
    }
  }

  @Input()
  public set buffer(value: null | AudioBuffer) {
    if (this.obj) {
      this.obj.buffer = value;
    }
  }

  @Input()
  public set detune(value: number) {
    if (this.obj) {
      this.obj.detune = value;
    }
  }

  @Input()
  public set loop(value: boolean) {
    if (this.obj) {
      this.obj.loop = value;
    }
  }

  @Input()
  public set loopStart(value: number) {
    if (this.obj) {
      this.obj.loopStart = value;
    }
  }

  @Input()
  public set loopEnd(value: number) {
    if (this.obj) {
      this.obj.loopEnd = value;
    }
  }

  @Input()
  public set offset(value: number) {
    if (this.obj) {
      this.obj.offset = value;
    }
  }

  @Input()
  public set duration(value: number | undefined) {
    if (this.obj) {
      this.obj.duration = value;
    }
  }

  @Input()
  public set playbackRate(value: number) {
    if (this.obj) {
      this.obj.playbackRate = value;
    }
  }

  @Input()
  public set isPlaying(value: boolean) {
    if (this.obj) {
      this.obj.isPlaying = value;
    }
  }

  @Input()
  public set hasPlaybackControl(value: boolean) {
    if (this.obj) {
      this.obj.hasPlaybackControl = value;
    }
  }

  @Input()
  public set sourceType(value: string) {
    if (this.obj) {
      this.obj.sourceType = value;
    }
  }

  @Input()
  public set source(value: null | AudioBufferSourceNode) {
    if (this.obj) {
      this.obj.source = value;
    }
  }

  @Input()
  public set filters(value: any[]) {
    if (this.obj) {
      this.obj.filters = value;
    }
  }
}
