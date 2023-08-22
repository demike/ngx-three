/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { ColorRepresentation, RectAreaLight } from 'three';
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

  // @ts-ignore
  public get isRectAreaLight(): true | undefined {
    return this._objRef?.isRectAreaLight;
  }
  // @ts-ignore
  public get type(): (string | 'RectAreaLight') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set width(value: number) {
    if (this._objRef) {
      this._objRef.width = value;
    }
  }

  // @ts-ignore
  public get width(): number | undefined {
    return this._objRef?.width;
  }
  @Input()
  public set height(value: number) {
    if (this._objRef) {
      this._objRef.height = value;
    }
  }

  // @ts-ignore
  public get height(): number | undefined {
    return this._objRef?.height;
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  // @ts-ignore
  public get intensity(): number | undefined {
    return this._objRef?.intensity;
  }
  @Input()
  public set power(value: number) {
    if (this._objRef) {
      this._objRef.power = value;
    }
  }

  // @ts-ignore
  public get power(): number | undefined {
    return this._objRef?.power;
  }
}
