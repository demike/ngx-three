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
import { Event, Group } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-group',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGroup) }],
})
export class ThGroup<T extends Group = Group, TARGS = []> extends ThObject3D<
  Event,
  T,
  TARGS
> {
  public getType(): Type<Group> {
    return Group;
  }

  @Input()
  public set type(value: 'Group') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): 'Group' | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get isGroup(): true | undefined {
    return this._objRef?.isGroup;
  }
}
