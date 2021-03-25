/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { InstancedBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-instancedBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThInstancedBufferGeometry),
    },
  ],
})
export class ThInstancedBufferGeometry<
  T extends InstancedBufferGeometry = InstancedBufferGeometry,
  TARGS extends any[] = []
> extends ThBufferGeometry<T, TARGS> {
  protected getType(): Type<InstancedBufferGeometry> {
    return InstancedBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set groups(
    value: { start: number; count: number; instances: number }[]
  ) {
    if (this._objRef) {
      this._objRef.groups = value;
    }
  }

  @Input()
  public set instanceCount(value: number) {
    if (this._objRef) {
      this._objRef.instanceCount = value;
    }
  }
}
