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
import { Audio, AudioContext, AudioListener } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audio',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }],
})
export class ThAudio<
  NodeType extends AudioNode = GainNode,
  T extends Audio<NodeType> = Audio<NodeType>,
  TARGS extends any[] = [listener: AudioListener]
> extends ThObject3D<T, TARGS> {
  public getType(): Type<Audio<NodeType>> {
    return Audio;
  }

  @Input()
  public set type(value: 'Audio') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set listener(value: AudioListener) {
    if (this._objRef) {
      this._objRef.listener = value;
    }
  }

  @Input()
  public set context(value: AudioContext) {
    if (this._objRef) {
      this._objRef.context = value;
    }
  }

  @Input()
  public set gain(value: GainNode) {
    if (this._objRef) {
      this._objRef.gain = value;
    }
  }

  @Input()
  public set autoplay(value: boolean) {
    if (this._objRef) {
      this._objRef.autoplay = value;
    }
  }

  @Input()
  public set buffer(value: null | AudioBuffer) {
    if (this._objRef) {
      this._objRef.buffer = value;
    }
  }

  @Input()
  public set detune(value: number) {
    if (this._objRef) {
      this._objRef.detune = value;
    }
  }

  @Input()
  public set loop(value: boolean) {
    if (this._objRef) {
      this._objRef.loop = value;
    }
  }

  @Input()
  public set loopStart(value: number) {
    if (this._objRef) {
      this._objRef.loopStart = value;
    }
  }

  @Input()
  public set loopEnd(value: number) {
    if (this._objRef) {
      this._objRef.loopEnd = value;
    }
  }

  @Input()
  public set offset(value: number) {
    if (this._objRef) {
      this._objRef.offset = value;
    }
  }

  @Input()
  public set duration(value: number | undefined) {
    if (this._objRef) {
      this._objRef.duration = value;
    }
  }

  @Input()
  public set playbackRate(value: number) {
    if (this._objRef) {
      this._objRef.playbackRate = value;
    }
  }

  @Input()
  public set isPlaying(value: boolean) {
    if (this._objRef) {
      this._objRef.isPlaying = value;
    }
  }

  @Input()
  public set hasPlaybackControl(value: boolean) {
    if (this._objRef) {
      this._objRef.hasPlaybackControl = value;
    }
  }

  @Input()
  public set sourceType(value: string) {
    if (this._objRef) {
      this._objRef.sourceType = value;
    }
  }

  @Input()
  public set source(value: null | AudioBufferSourceNode) {
    if (this._objRef) {
      this._objRef.source = value;
    }
  }

  @Input()
  public set filters(value: AudioNode[]) {
    if (this._objRef) {
      this._objRef.filters = value;
    }
  }
}
