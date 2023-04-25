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
import { AudioListener, PositionalAudio } from 'three';
import { ThAudio } from './ThAudio';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-positionalAudio',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
  ],
})
export class ThPositionalAudio<
  T extends PositionalAudio = PositionalAudio,
  TARGS = /* listener */ AudioListener
> extends ThAudio<PannerNode, T, TARGS> {
  public getType(): Type<PositionalAudio> {
    return PositionalAudio;
  }

  @Input()
  public set panner(value: PannerNode) {
    if (this._objRef) {
      this._objRef.panner = value;
    }
  }

  // @ts-ignore
  public get panner(): PannerNode | undefined {
    return this._objRef?.panner;
  }
}
