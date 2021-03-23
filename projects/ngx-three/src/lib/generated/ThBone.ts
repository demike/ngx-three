/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Bone } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-bone',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBone) }]
})
export class ThBone<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: Bone;
  protected getType(): Type<Bone> {
    return Bone;
  }

  @Input()
  public set type(value: 'Bone') {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }
}
