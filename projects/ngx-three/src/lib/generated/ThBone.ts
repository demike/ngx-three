/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { Bone } from 'three';
import { Object3DEventMap } from 'three/src/core/Object3D.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-bone',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }],
})
export class ThBone<
  TEventMap extends Object3DEventMap = Object3DEventMap,
  T extends Bone<TEventMap> = Bone<TEventMap>,
  TARGS = [],
> extends ThObject3D<TEventMap, T, TARGS> {
  public getType(): Type<Bone<TEventMap>> {
    return Bone;
  }

  public get isBone(): true | undefined {
    return this._objRef?.isBone;
  }
  public get type(): (string | 'Bone') | undefined {
    return this._objRef?.type;
  }
}
