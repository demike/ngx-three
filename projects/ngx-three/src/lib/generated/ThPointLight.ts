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
import { PointLight } from 'three';
import { PointLightShadow } from 'three/src/lights/PointLightShadow.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-pointLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) },
  ],
})
export class ThPointLight<
  T extends PointLight = PointLight,
  TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    distance?: number,
    decay?: number,
  ],
> extends ThLight<T, TARGS> {
  public getType(): Type<PointLight> {
    return PointLight;
  }

  public get isPointLight(): boolean | undefined {
    return this._objRef?.isPointLight;
  }
  @Input()
  public set distance(value: number) {
    if (this._objRef) {
      this._objRef.distance = value;
    }
  }

  public get distance(): number | undefined {
    return this._objRef?.distance;
  }
  @Input()
  public set decay(value: number) {
    if (this._objRef) {
      this._objRef.decay = value;
    }
  }

  public get decay(): number | undefined {
    return this._objRef?.decay;
  }
  @Input()
  public set shadow(value: PointLightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  public get shadow(): PointLightShadow | undefined {
    return this._objRef?.shadow;
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
