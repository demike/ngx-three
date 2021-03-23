/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { LOD, Object3D } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lOD',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLOD) }]
})
export class ThLOD<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: LOD;
  protected getType(): Type<LOD> {
    return LOD;
  }

  @Input()
  public set type(value: 'LOD') {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set levels(value: { distance: number; object: Object3D }[]) {
    if (this.objRef) {
      this.objRef.levels = value;
    }
  }

  @Input()
  public set autoUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.autoUpdate = value;
    }
  }

  @Input()
  public set objects(value: any[]) {
    if (this.objRef) {
      this.objRef.objects = value;
    }
  }
}
