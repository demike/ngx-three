/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { LineDashedMaterial, LineDashedMaterialParameters } from 'three';
import { ThLineBasicMaterial } from './ThLineBasicMaterial';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-lineDashedMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThLineDashedMaterial),
    },
  ],
})
export class ThLineDashedMaterial<
  T extends LineDashedMaterial = LineDashedMaterial,
  TARGS = /* parameters? */ LineDashedMaterialParameters,
> extends ThLineBasicMaterial<T, TARGS> {
  public getType(): Type<LineDashedMaterial> {
    return LineDashedMaterial;
  }

  public get isLineDashedMaterial(): boolean | undefined {
    return this._objRef?.isLineDashedMaterial;
  }
  @Input()
  public set scale(value: number) {
    if (this._objRef) {
      this._objRef.scale = value;
    }
  }

  public get scale(): number | undefined {
    return this._objRef?.scale;
  }
  @Input()
  public set dashSize(value: number) {
    if (this._objRef) {
      this._objRef.dashSize = value;
    }
  }

  public get dashSize(): number | undefined {
    return this._objRef?.dashSize;
  }
  @Input()
  public set gapSize(value: number) {
    if (this._objRef) {
      this._objRef.gapSize = value;
    }
  }

  public get gapSize(): number | undefined {
    return this._objRef?.gapSize;
  }
}
