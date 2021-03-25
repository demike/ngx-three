/* eslint-disable @typescript-eslint/naming-convention */
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
  PointsMaterial,
  PointsMaterialParameters,
  Texture,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-pointsMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThPointsMaterial) },
  ],
})
export class ThPointsMaterial<
  T extends PointsMaterial = PointsMaterial,
  TARGS extends any[] = [parameters?: PointsMaterialParameters]
> extends ThMaterial<T, TARGS> {
  protected getType(): Type<PointsMaterial> {
    return PointsMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this._objRef) {
      this._objRef.sizeAttenuation = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this._objRef) {
      this._objRef.morphTargets = value;
    }
  }
}
