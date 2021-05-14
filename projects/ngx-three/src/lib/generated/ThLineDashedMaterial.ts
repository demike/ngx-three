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
export class ThLineDashedMaterial<
  T extends LineDashedMaterial = LineDashedMaterial,
  TARGS extends any[] = [parameters?: LineDashedMaterialParameters]
> extends ThLineBasicMaterial<T, TARGS> {
  public getType(): Type<LineDashedMaterial> {
    return LineDashedMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set scale(value: number) {
    if (this._objRef) {
      this._objRef.scale = value;
    }
  }

  @Input()
  public set dashSize(value: number) {
    if (this._objRef) {
      this._objRef.dashSize = value;
    }
  }

  @Input()
  public set gapSize(value: number) {
    if (this._objRef) {
      this._objRef.gapSize = value;
    }
  }
}
