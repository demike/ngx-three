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
import { RectAreaLight } from 'three';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-rectAreaLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
  ],
})
export class ThRectAreaLight<
  T extends RectAreaLight = RectAreaLight,
  TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    width?: number,
    height?: number,
  ],
> extends ThLight<undefined, T, TARGS> {
  public getType(): Type<RectAreaLight> {
    return RectAreaLight;
  }

  public get isRectAreaLight(): true | undefined {
    return this._objRef?.isRectAreaLight;
  }
  public get type(): (string | 'RectAreaLight') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set width(value: number) {
    if (this._objRef) {
      this._objRef.width = value;
    }
  }

  public get width(): number | undefined {
    return this._objRef?.width;
  }
  @Input()
  public set height(value: number) {
    if (this._objRef) {
      this._objRef.height = value;
    }
  }

  public get height(): number | undefined {
    return this._objRef?.height;
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  public get intensity(): number | undefined {
    return this._objRef?.intensity;
  }
  @Input()
  public set power(value: number) {
    if (this._objRef) {
      this._objRef.power = value;
    }
  }

  public get power(): number | undefined {
    return this._objRef?.power;
  }
}
