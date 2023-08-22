/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
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

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get isInstancedBufferGeometry(): true | undefined {
    return this._objRef?.isInstancedBufferGeometry;
  }
  @Input()
  public set instanceCount(value: number) {
    if (this._objRef) {
      this._objRef.instanceCount = value;
    }
  }

  // @ts-ignore
  public get instanceCount(): number | undefined {
    return this._objRef?.instanceCount;
  }
}
