/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { AudioListener, Object3DEventMap } from 'three';
import { AudioContext } from 'three/src/audio/AudioContext.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audioListener',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
  ],
})
export class ThAudioListener<
  T extends AudioListener = AudioListener,
  TARGS = [],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<AudioListener> {
    return AudioListener;
  }

  public get type(): (string | 'AudioListener') | undefined {
    return this._objRef?.type;
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
  public set filter(value: AudioNode) {
    if (this._objRef) {
      this._objRef.filter = value;
    }
  }

  public get filter(): AudioNode | undefined {
    return this._objRef?.filter;
  }
  @Input()
  public set timeDelta(value: number) {
    if (this._objRef) {
      this._objRef.timeDelta = value;
    }
  }

  public get timeDelta(): number | undefined {
    return this._objRef?.timeDelta;
  }
}
