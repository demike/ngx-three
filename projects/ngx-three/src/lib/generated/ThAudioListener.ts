/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { AudioContext, AudioListener } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-audioListener',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThAudioListener) }]
})
export class ThAudioListener<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: AudioListener;
  protected getType(): Type<AudioListener> {
    return AudioListener;
  }

  @Input()
  public set type(value: 'AudioListener') {
    if (this.objRef) {
      this.objRef.type = value;
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
  public set filter(value: null | any) {
    if (this.objRef) {
      this.objRef.filter = value;
    }
  }

  @Input()
  public set timeDelta(value: number) {
    if (this.objRef) {
      this.objRef.timeDelta = value;
    }
  }
}
