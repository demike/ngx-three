/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { LOD, Object3D } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lOD',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }],
})
export class ThLOD<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  @Input()
  public obj!: LOD;
  protected getType(): Type<LOD> {
    return LOD;
  }

  @Input()
  public set type(value: 'LOD') {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set levels(value: { distance: number; object: Object3D }[]) {
    if (this.obj) {
      this.obj.levels = value;
    }
  }

  @Input()
  public set autoUpdate(value: boolean) {
    if (this.obj) {
      this.obj.autoUpdate = value;
    }
  }

  @Input()
  public set objects(value: any[]) {
    if (this.obj) {
      this.obj.objects = value;
    }
  }
}
