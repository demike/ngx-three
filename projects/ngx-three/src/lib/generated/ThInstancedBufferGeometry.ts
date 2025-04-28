/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { InstancedBufferGeometry, NormalBufferAttributes } from 'three';
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
  TARGS = [],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<InstancedBufferGeometry> {
    return InstancedBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  public get type(): string | undefined {
    return this._objRef?.type;
  }
  public get isInstancedBufferGeometry(): true | undefined {
    return this._objRef?.isInstancedBufferGeometry;
  }
  @Input()
  public set instanceCount(value: number) {
    if (this._objRef) {
      this._objRef.instanceCount = value;
    }
  }

  public get instanceCount(): number | undefined {
    return this._objRef?.instanceCount;
  }
}
