/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { Bone, Event } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-bone',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }],
})
export class ThBone<T extends Bone = Bone, TARGS = []> extends ThObject3D<
  Event,
  T,
  TARGS
> {
  public getType(): Type<Bone> {
    return Bone;
  }

  // @ts-ignore
  public get isBone(): true | undefined {
    return this._objRef?.isBone;
  }
  // @ts-ignore
  public get type(): (string | 'Bone') | undefined {
    return this._objRef?.type;
  }
}
