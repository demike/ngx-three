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
  TARGS extends any[] = [color?: Color | string | number, intensity?: number, width?: number, height?: number]
> extends ThLight<TARGS> {
  @Input()
  public objRef!: RectAreaLight;
  protected getType(): Type<RectAreaLight> {
    return RectAreaLight;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set width(value: number) {
    if (this.objRef) {
      this.objRef.width = value;
    }
  }

  @Input()
  public set height(value: number) {
    if (this.objRef) {
      this.objRef.height = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this.objRef) {
      this.objRef.intensity = value;
    }
  }
}
