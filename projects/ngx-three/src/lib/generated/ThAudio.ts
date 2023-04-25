/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Audio, AudioContext, AudioListener, Event } from 'three';
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
  TARGS = /* listener */ AudioListener
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<Audio<NodeType>> {
    return Audio;
  }

  @Input()
  public set type(value: 'Audio') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): 'Audio' | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set listener(value: AudioListener) {
    if (this._objRef) {
      this._objRef.listener = value;
    }
  }

  // @ts-ignore
  public get listener(): AudioListener | undefined {
    return this._objRef?.listener;
  }
  @Input()
  public set context(value: AudioContext) {
    if (this._objRef) {
      this._objRef.context = value;
    }
  }

  // @ts-ignore
  public get context(): AudioContext | undefined {
    return this._objRef?.context;
  }
  @Input()
  public set gain(value: GainNode) {
    if (this._objRef) {
      this._objRef.gain = value;
    }
  }

  // @ts-ignore
  public get gain(): GainNode | undefined {
    return this._objRef?.gain;
  }
  @Input()
  public set autoplay(value: boolean) {
    if (this._objRef) {
      this._objRef.autoplay = value;
    }
  }

  // @ts-ignore
  public get autoplay(): boolean | undefined {
    return this._objRef?.autoplay;
  }
  @Input()
  public set buffer(value: null | AudioBuffer) {
    if (this._objRef) {
      this._objRef.buffer = value;
    }
  }

  // @ts-ignore
  public get buffer(): (null | AudioBuffer) | undefined {
    return this._objRef?.buffer;
  }
  @Input()
  public set detune(value: number) {
    if (this._objRef) {
      this._objRef.detune = value;
    }
  }

  // @ts-ignore
  public get detune(): number | undefined {
    return this._objRef?.detune;
  }
  @Input()
  public set loop(value: boolean) {
    if (this._objRef) {
      this._objRef.loop = value;
    }
  }

  // @ts-ignore
  public get loop(): boolean | undefined {
    return this._objRef?.loop;
  }
  @Input()
  public set loopStart(value: number) {
    if (this._objRef) {
      this._objRef.loopStart = value;
    }
  }

  // @ts-ignore
  public get loopStart(): number | undefined {
    return this._objRef?.loopStart;
  }
  @Input()
  public set loopEnd(value: number) {
    if (this._objRef) {
      this._objRef.loopEnd = value;
    }
  }

  // @ts-ignore
  public get loopEnd(): number | undefined {
    return this._objRef?.loopEnd;
  }
  @Input()
  public set offset(value: number) {
    if (this._objRef) {
      this._objRef.offset = value;
    }
  }

  // @ts-ignore
  public get offset(): number | undefined {
    return this._objRef?.offset;
  }
  @Input()
  public set duration(value: number | undefined) {
    if (this._objRef) {
      this._objRef.duration = value;
    }
  }

  // @ts-ignore
  public get duration(): (number | undefined) | undefined {
    return this._objRef?.duration;
  }
  @Input()
  public set playbackRate(value: number) {
    if (this._objRef) {
      this._objRef.playbackRate = value;
    }
  }

  // @ts-ignore
  public get playbackRate(): number | undefined {
    return this._objRef?.playbackRate;
  }
  @Input()
  public set isPlaying(value: boolean) {
    if (this._objRef) {
      this._objRef.isPlaying = value;
    }
  }

  // @ts-ignore
  public get isPlaying(): boolean | undefined {
    return this._objRef?.isPlaying;
  }
  @Input()
  public set hasPlaybackControl(value: boolean) {
    if (this._objRef) {
      this._objRef.hasPlaybackControl = value;
    }
  }

  // @ts-ignore
  public get hasPlaybackControl(): boolean | undefined {
    return this._objRef?.hasPlaybackControl;
  }
  @Input()
  public set sourceType(value: string) {
    if (this._objRef) {
      this._objRef.sourceType = value;
    }
  }

  // @ts-ignore
  public get sourceType(): string | undefined {
    return this._objRef?.sourceType;
  }
  @Input()
  public set source(value: null | AudioBufferSourceNode) {
    if (this._objRef) {
      this._objRef.source = value;
    }
  }

  // @ts-ignore
  public get source(): (null | AudioBufferSourceNode) | undefined {
    return this._objRef?.source;
  }
  @Input()
  public set filters(value: AudioNode[]) {
    if (this._objRef) {
      this._objRef.filters = value;
    }
  }

  // @ts-ignore
  public get filters(): AudioNode[] | undefined {
    return this._objRef?.filters;
  }
}
