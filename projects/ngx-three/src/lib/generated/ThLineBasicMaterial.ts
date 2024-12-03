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
import {
  Color,
  ColorRepresentation,
  LineBasicMaterial,
  LineBasicMaterialParameters,
} from 'three';
import { Texture } from 'three/src/textures/Texture.js';
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
  TARGS = /* parameters? */ LineBasicMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<LineBasicMaterial> {
    return LineBasicMaterial;
  }

  public get isLineBasicMaterial(): true | undefined {
    return this._objRef?.isLineBasicMaterial;
  }
  @Input()
  public set color(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set linewidth(value: number) {
    if (this._objRef) {
      this._objRef.linewidth = value;
    }
  }

  public get linewidth(): number | undefined {
    return this._objRef?.linewidth;
  }
  @Input()
  public set linecap(value: string) {
    if (this._objRef) {
      this._objRef.linecap = value;
    }
  }

  public get linecap(): string | undefined {
    return this._objRef?.linecap;
  }
  @Input()
  public set linejoin(value: string) {
    if (this._objRef) {
      this._objRef.linejoin = value;
    }
  }

  public get linejoin(): string | undefined {
    return this._objRef?.linejoin;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
}
