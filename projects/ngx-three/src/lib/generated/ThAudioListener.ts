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
import { AudioContext, AudioListener, Event } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audioListener',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) },
  ],
})
export class ThAudioListener<
  T extends AudioListener = AudioListener,
  TARGS = []
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<AudioListener> {
    return AudioListener;
  }

  @Input()
  public set type(value: 'AudioListener') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): 'AudioListener' | undefined {
    return this._objRef?.type;
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
  public set filter(value: any) {
    if (this._objRef) {
      this._objRef.filter = value;
    }
  }

  // @ts-ignore
  public get filter(): any | undefined {
    return this._objRef?.filter;
  }
  @Input()
  public set timeDelta(value: number) {
    if (this._objRef) {
      this._objRef.timeDelta = value;
    }
  }

  // @ts-ignore
  public get timeDelta(): number | undefined {
    return this._objRef?.timeDelta;
  }
}
