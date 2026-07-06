/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { AudioListener, Object3DEventMap } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audioListener',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  public get context(): AudioContext | undefined {
    return this._objRef?.context;
  }
  public get gain(): GainNode | undefined {
    return this._objRef?.gain;
  }
  public get filter(): (AudioNode | null) | undefined {
    return this._objRef?.filter;
  }
  public get timeDelta(): number | undefined {
    return this._objRef?.timeDelta;
  }
}
