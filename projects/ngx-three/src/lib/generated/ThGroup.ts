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
export class ThGroup<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  public obj!: Group;
  protected getType(): Type<Group> {
    return Group;
  }

  @Input()
  public set type(value: 'Group') {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
