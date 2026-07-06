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
import { AudioListener } from 'three/src/audio/AudioListener.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audio',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }],
})
export class ThAudio<
  TNode extends AudioNode = GainNode,
  T extends Audio<TNode> = Audio<TNode>,
  TARGS = /* listener */ AudioListener,
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<Audio<TNode>> {
    return Audio;
  }

  public get listener(): AudioListener | undefined {
    return this._objRef?.listener;
  }
  public get context(): AudioContext | undefined {
    return this._objRef?.context;
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
  public get buffer(): (AudioBuffer | null) | undefined {
    return this._objRef?.buffer;
  }
  public get detune(): number | undefined {
    return this._objRef?.detune;
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
  public get playbackRate(): number | undefined {
    return this._objRef?.playbackRate;
  }
  public get isPlaying(): boolean | undefined {
    return this._objRef?.isPlaying;
  }
  public get hasPlaybackControl(): boolean | undefined {
    return this._objRef?.hasPlaybackControl;
  }
  public get source(): (AudioNode | null) | undefined {
    return this._objRef?.source;
  }
  public get sourceType():
    | ('empty' | 'audioNode' | 'mediaNode' | 'mediaStreamNode' | 'buffer')
    | undefined {
    return this._objRef?.sourceType;
  }
  public get filters(): AudioNode[] | undefined {
    return this._objRef?.filters;
  }
}
