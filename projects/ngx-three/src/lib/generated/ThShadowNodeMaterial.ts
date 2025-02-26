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
import {
  Color,
  ColorRepresentation,
  ShadowNodeMaterial,
  ShadowNodeMaterialParameters,
} from 'three/webgpu';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-shadowNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThShadowNodeMaterial),
    },
  ],
})
export class ThShadowNodeMaterial<
  T extends ShadowNodeMaterial = ShadowNodeMaterial,
  TARGS = /* parameters? */ ShadowNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<ShadowNodeMaterial> {
    return ShadowNodeMaterial;
  }

  public get isShadowNodeMaterial(): true | undefined {
    return this._objRef?.isShadowNodeMaterial;
  }
  public get isShadowMaterial(): true | undefined {
    return this._objRef?.isShadowMaterial;
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
}
