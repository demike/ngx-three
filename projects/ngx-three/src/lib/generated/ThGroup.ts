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
import { Group } from 'three';
import { Object3DEventMap } from 'three/src/core/Object3D.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-group',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGroup) }],
})
export class ThGroup<
  TEventMap extends Object3DEventMap = Object3DEventMap,
  T extends Group<TEventMap> = Group<TEventMap>,
  TARGS = [],
> extends ThObject3D<TEventMap, T, TARGS> {
  public getType(): Type<Group<TEventMap>> {
    return Group;
  }

  public get isGroup(): true | undefined {
    return this._objRef?.isGroup;
  }
}
