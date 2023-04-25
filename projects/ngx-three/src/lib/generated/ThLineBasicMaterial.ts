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
import {
  Color,
  ColorRepresentation,
  LineBasicMaterial,
  LineBasicMaterialParameters,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-lineBasicMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThLineBasicMaterial) },
  ],
})
export class ThLineBasicMaterial<
  T extends LineBasicMaterial = LineBasicMaterial,
  TARGS = /* parameters? */ LineBasicMaterialParameters
> extends ThMaterial<T, TARGS> {
  public getType(): Type<LineBasicMaterial> {
    return LineBasicMaterial;
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
  @Input()
  public set color(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  // @ts-ignore
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  // @ts-ignore
  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set linewidth(value: number) {
    if (this._objRef) {
      this._objRef.linewidth = value;
    }
  }

  // @ts-ignore
  public get linewidth(): number | undefined {
    return this._objRef?.linewidth;
  }
  @Input()
  public set linecap(value: string) {
    if (this._objRef) {
      this._objRef.linecap = value;
    }
  }

  // @ts-ignore
  public get linecap(): string | undefined {
    return this._objRef?.linecap;
  }
  @Input()
  public set linejoin(value: string) {
    if (this._objRef) {
      this._objRef.linejoin = value;
    }
  }

  // @ts-ignore
  public get linejoin(): string | undefined {
    return this._objRef?.linejoin;
  }
}
