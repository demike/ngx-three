/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, RectAreaLight } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-rectAreaLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) }]
})
export class ThRectAreaLight<
  T extends RectAreaLight = RectAreaLight,
  TARGS extends any[] = [color?: Color | string | number, intensity?: number, width?: number, height?: number]
> extends ThLight<T, TARGS> {
  public getType(): Type<RectAreaLight> {
    return RectAreaLight;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set width(value: number) {
    if (this._objRef) {
      this._objRef.width = value;
    }
  }

  @Input()
  public set height(value: number) {
    if (this._objRef) {
      this._objRef.height = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }
}
