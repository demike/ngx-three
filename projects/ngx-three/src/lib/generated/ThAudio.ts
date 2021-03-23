/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Audio, AudioContext, AudioListener } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audio',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudio) }]
})
export class ThAudio<NodeType extends AudioNode = GainNode, TARGS extends any[] = [listener: AudioListener]> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: Audio<NodeType>;
  protected getType(): Type<Audio<NodeType>> {
    return Audio;
  }

  @Input()
  public set type(value: 'Audio') {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set listener(value: AudioListener) {
    if (this.objRef) {
      this.objRef.listener = value;
    }
  }

  @Input()
  public set context(value: AudioContext) {
    if (this.objRef) {
      this.objRef.context = value;
    }
  }

  @Input()
  public set gain(value: GainNode) {
    if (this.objRef) {
      this.objRef.gain = value;
    }
  }

  @Input()
  public set autoplay(value: boolean) {
    if (this.objRef) {
      this.objRef.autoplay = value;
    }
  }

  @Input()
  public set buffer(value: null | AudioBuffer) {
    if (this.objRef) {
      this.objRef.buffer = value;
    }
  }

  @Input()
  public set detune(value: number) {
    if (this.objRef) {
      this.objRef.detune = value;
    }
  }

  @Input()
  public set loop(value: boolean) {
    if (this.objRef) {
      this.objRef.loop = value;
    }
  }

  @Input()
  public set loopStart(value: number) {
    if (this.objRef) {
      this.objRef.loopStart = value;
    }
  }

  @Input()
  public set loopEnd(value: number) {
    if (this.objRef) {
      this.objRef.loopEnd = value;
    }
  }

  @Input()
  public set offset(value: number) {
    if (this.objRef) {
      this.objRef.offset = value;
    }
  }

  @Input()
  public set duration(value: number | undefined) {
    if (this.objRef) {
      this.objRef.duration = value;
    }
  }

  @Input()
  public set playbackRate(value: number) {
    if (this.objRef) {
      this.objRef.playbackRate = value;
    }
  }

  @Input()
  public set isPlaying(value: boolean) {
    if (this.objRef) {
      this.objRef.isPlaying = value;
    }
  }

  @Input()
  public set hasPlaybackControl(value: boolean) {
    if (this.objRef) {
      this.objRef.hasPlaybackControl = value;
    }
  }

  @Input()
  public set sourceType(value: string) {
    if (this.objRef) {
      this.objRef.sourceType = value;
    }
  }

  @Input()
  public set source(value: null | AudioBufferSourceNode) {
    if (this.objRef) {
      this.objRef.source = value;
    }
  }

  @Input()
  public set filters(value: any[]) {
    if (this.objRef) {
      this.objRef.filters = value;
    }
  }
}
