/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { AudioContext, AudioListener } from 'three';
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
  TARGS extends any[] = []
> extends ThObject3D<TARGS> {
  @Input()
  public obj!: AudioListener;
  protected getType(): Type<AudioListener> {
    return AudioListener;
  }

  @Input()
  public set type(value: 'AudioListener') {
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
