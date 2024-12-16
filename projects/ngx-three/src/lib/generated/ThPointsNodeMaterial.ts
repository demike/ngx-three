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
import { Texture } from 'three/src/textures/Texture.js';
import {
  Color,
  ColorRepresentation,
  PointsNodeMaterial,
  PointsNodeMaterialParameters,
} from 'three/webgpu';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-pointsNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThPointsNodeMaterial),
    },
  ],
})
export class ThPointsNodeMaterial<
  T extends PointsNodeMaterial = PointsNodeMaterial,
  TARGS = /* parameters? */ PointsNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<PointsNodeMaterial> {
    return PointsNodeMaterial;
  }

  public get isPointsNodeMaterial(): true | undefined {
    return this._objRef?.isPointsNodeMaterial;
  }
  public get isPointsMaterial(): true | undefined {
    return this._objRef?.isPointsMaterial;
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
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  public get size(): number | undefined {
    return this._objRef?.size;
  }
  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this._objRef) {
      this._objRef.sizeAttenuation = value;
    }
  }

  public get sizeAttenuation(): boolean | undefined {
    return this._objRef?.sizeAttenuation;
  }
}
