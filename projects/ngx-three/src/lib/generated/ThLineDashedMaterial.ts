/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { LineDashedMaterial, LineDashedMaterialParameters } from 'three';
import { ThLineBasicMaterial } from './ThLineBasicMaterial';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-lineDashedMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThLineDashedMaterial)
    }
  ]
})
export class ThLineDashedMaterial<TARGS extends any[] = [parameters?: LineDashedMaterialParameters]> extends ThLineBasicMaterial<TARGS> {
  @Input()
  public objRef!: LineDashedMaterial;
  protected getType(): Type<LineDashedMaterial> {
    return LineDashedMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set scale(value: number) {
    if (this.objRef) {
      this.objRef.scale = value;
    }
  }

  @Input()
  public set dashSize(value: number) {
    if (this.objRef) {
      this.objRef.dashSize = value;
    }
  }

  @Input()
  public set gapSize(value: number) {
    if (this.objRef) {
      this.objRef.gapSize = value;
    }
  }
}
