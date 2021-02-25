// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
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
  TARGS extends any[] = []
> extends ThBufferGeometry<TARGS> {
  @Input()
  public obj!: InstancedBufferGeometry;
  protected getType(): Type<InstancedBufferGeometry> {
    return InstancedBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set groups(
    value: { start: number; count: number; instances: number }[]
  ) {
    if (this.obj) {
      this.obj.groups = value;
    }
  }

  @Input()
  public set instanceCount(value: number) {
    if (this.obj) {
      this.obj.instanceCount = value;
    }
  }
}
