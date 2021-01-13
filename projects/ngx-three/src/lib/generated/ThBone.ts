// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Bone } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-bone',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }],
})
export class ThBone<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  public obj!: Bone;
  protected getType(): Type<Bone> {
    return Bone;
  }

  @Input()
  public set type(value: 'Bone') {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
