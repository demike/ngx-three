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
import { Object3DEventMap, SpotLightHelper } from 'three';
import { SpotLight } from 'three/src/lights/SpotLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { LineSegments } from 'three/src/objects/LineSegments.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-spotLightHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLightHelper) },
  ],
})
export class ThSpotLightHelper<
  T extends SpotLightHelper = SpotLightHelper,
  TARGS = [light: SpotLight, color?: ColorRepresentation],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<SpotLightHelper> {
    return SpotLightHelper;
  }

  @Input()
  public set light(value: SpotLight) {
    if (this._objRef) {
      this._objRef.light = value;
    }
  }

  public get light(): SpotLight | undefined {
    return this._objRef?.light;
  }
  @Input()
  public set color(value: ColorRepresentation | undefined) {
    if (this._objRef) {
      this._objRef.color = value;
    }
  }

  public get color(): (ColorRepresentation | undefined) | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set cone(value: LineSegments) {
    if (this._objRef) {
      this._objRef.cone = value;
    }
  }

  public get cone(): LineSegments | undefined {
    return this._objRef?.cone;
  }
}
