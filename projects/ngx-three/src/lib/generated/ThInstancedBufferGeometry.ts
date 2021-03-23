/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
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
      useExisting: forwardRef(() => ThInstancedBufferGeometry)
    }
  ]
})
export class ThInstancedBufferGeometry<TARGS extends any[] = []> extends ThBufferGeometry<TARGS> {
  @Input()
  public objRef!: InstancedBufferGeometry;
  protected getType(): Type<InstancedBufferGeometry> {
    return InstancedBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set groups(value: { start: number; count: number; instances: number }[]) {
    if (this.objRef) {
      this.objRef.groups = value;
    }
  }

  @Input()
  public set instanceCount(value: number) {
    if (this.objRef) {
      this.objRef.instanceCount = value;
    }
  }
}
