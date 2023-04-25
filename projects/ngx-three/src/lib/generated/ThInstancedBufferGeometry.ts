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
import { InstancedBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-instancedBufferGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThInstancedBufferGeometry),
    },
  ],
})
export class ThInstancedBufferGeometry<
  T extends InstancedBufferGeometry = InstancedBufferGeometry,
  TARGS = []
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<InstancedBufferGeometry> {
    return InstancedBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set isInstancedBufferGeometry(value: boolean) {
    if (this._objRef) {
      this._objRef.isInstancedBufferGeometry = value;
    }
  }

  @Input()
  public set instanceCount(value: number) {
    if (this._objRef) {
      this._objRef.instanceCount = value;
    }
  }
}
