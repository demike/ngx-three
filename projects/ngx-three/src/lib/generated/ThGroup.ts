/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Group } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-group',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGroup) }],
})
export class ThGroup<
  T extends Group = Group,
  TARGS extends any[] = []
> extends ThObject3D<T, TARGS> {
  protected getType(): Type<Group> {
    return Group;
  }

  @Input()
  public set type(value: 'Group') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
