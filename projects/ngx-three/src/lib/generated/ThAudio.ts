/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { Audio, Object3DEventMap } from 'three';
import { AudioContext } from 'three/src/audio/AudioContext.js';
import { AudioListener } from 'three/src/audio/AudioListener.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audio',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }],
})
export class ThAudio<
  NodeType extends AudioNode = GainNode,
  T extends Audio<NodeType> = Audio<NodeType>,
  TARGS = /* listener */ AudioListener,
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<Audio<NodeType>> {
    return Audio;
  }

  public get type(): (string | 'Audio') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set listener(value: AudioListener) {
    if (this._objRef) {
      this._objRef.listener = value;
    }
  }

  public get listener(): AudioListener | undefined {
    return this._objRef?.listener;
  }
  @Input()
  public set context(value: AudioContext) {
    if (this._objRef) {
      this._objRef.context = value;
    }
  }

  public get context(): AudioContext | undefined {
    return this._objRef?.context;
  }
  @Input()
  public set gain(value: GainNode) {
    if (this._objRef) {
      this._objRef.gain = value;
    }
  }

  public get gain(): GainNode | undefined {
    return this._objRef?.gain;
  }
  @Input()
  public set autoplay(value: boolean) {
    if (this._objRef) {
      this._objRef.autoplay = value;
    }
  }

  public get autoplay(): boolean | undefined {
    return this._objRef?.autoplay;
  }
  @Input()
  public set buffer(value: AudioBuffer | null) {
    if (this._objRef) {
      this._objRef.buffer = value;
    }
  }

  public get buffer(): (AudioBuffer | null) | undefined {
    return this._objRef?.buffer;
  }
  @Input()
  public set detune(value: number) {
    if (this._objRef) {
      this._objRef.detune = value;
    }
  }

  public get detune(): number | undefined {
    return this._objRef?.detune;
  }
  @Input()
  public set loop(value: boolean) {
    if (this._objRef) {
      this._objRef.loop = value;
    }
  }

  public get loop(): boolean | undefined {
    return this._objRef?.loop;
  }
  @Input()
  public set loopStart(value: number) {
    if (this._objRef) {
      this._objRef.loopStart = value;
    }
  }

  public get loopStart(): number | undefined {
    return this._objRef?.loopStart;
  }
  @Input()
  public set loopEnd(value: number) {
    if (this._objRef) {
      this._objRef.loopEnd = value;
    }
  }

  public get loopEnd(): number | undefined {
    return this._objRef?.loopEnd;
  }
  @Input()
  public set offset(value: number) {
    if (this._objRef) {
      this._objRef.offset = value;
    }
  }

  public get offset(): number | undefined {
    return this._objRef?.offset;
  }
  @Input()
  public set duration(value: number | undefined) {
    if (this._objRef) {
      this._objRef.duration = value;
    }
  }

  public get duration(): (number | undefined) | undefined {
    return this._objRef?.duration;
  }
  @Input()
  public set playbackRate(value: number) {
    if (this._objRef) {
      this._objRef.playbackRate = value;
    }
  }

  public get playbackRate(): number | undefined {
    return this._objRef?.playbackRate;
  }
  @Input()
  public set isPlaying(value: boolean) {
    if (this._objRef) {
      this._objRef.isPlaying = value;
    }
  }

  public get isPlaying(): boolean | undefined {
    return this._objRef?.isPlaying;
  }
  @Input()
  public set hasPlaybackControl(value: boolean) {
    if (this._objRef) {
      this._objRef.hasPlaybackControl = value;
    }
  }

  public get hasPlaybackControl(): boolean | undefined {
    return this._objRef?.hasPlaybackControl;
  }
  @Input()
  public set sourceType(value: string) {
    if (this._objRef) {
      this._objRef.sourceType = value;
    }
  }

  public get sourceType(): string | undefined {
    return this._objRef?.sourceType;
  }
  @Input()
  public set source(value: AudioScheduledSourceNode | null) {
    if (this._objRef) {
      this._objRef.source = value;
    }
  }

  public get source(): (AudioScheduledSourceNode | null) | undefined {
    return this._objRef?.source;
  }
  @Input()
  public set filters(value: AudioNode[]) {
    if (this._objRef) {
      this._objRef.filters = value;
    }
  }

  public get filters(): AudioNode[] | undefined {
    return this._objRef?.filters;
  }
}
