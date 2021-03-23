/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, PointsMaterial, PointsMaterialParameters, Texture } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-pointsMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThPointsMaterial) }]
})
export class ThPointsMaterial<TARGS extends any[] = [parameters?: PointsMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public objRef!: PointsMaterial;
  protected getType(): Type<PointsMaterial> {
    return PointsMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.objRef) {
      this.objRef.color = applyValue<Color>(this.objRef.color, value);
    }
  }
  @Input()
  public set map(value: Texture | null) {
    if (this.objRef) {
      this.objRef.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.alphaMap = value;
    }
  }

  @Input()
  public set size(value: number) {
    if (this.objRef) {
      this.objRef.size = value;
    }
  }

  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this.objRef) {
      this.objRef.sizeAttenuation = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this.objRef) {
      this.objRef.morphTargets = value;
    }
  }
}
