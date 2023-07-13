/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  ColorRepresentation,
  Object3D,
  SpotLight,
  SpotLightShadow,
  Texture,
  Vector3,
} from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-spotLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
  ],
})
export class ThSpotLight<
  T extends SpotLight = SpotLight,
  TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    distance?: number,
    angle?: number,
    penumbra?: number,
    decay?: number
  ]
> extends ThLight<SpotLightShadow, T, TARGS> {
  public getType(): Type<SpotLight> {
    return SpotLight;
  }

  // @ts-ignore
  public get isSpotLight(): true | undefined {
    return this._objRef?.isSpotLight;
  }
  // @ts-ignore
  public get type(): (string | 'SpotLight') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.position = applyValue<Vector3>(this._objRef.position, value);
    }
  }
  // @ts-ignore
  public get position(): Vector3 | undefined {
    return this._objRef?.position;
  }
  @Input()
  public set target(value: Object3D) {
    if (this._objRef) {
      this._objRef.target = value;
    }
  }

  // @ts-ignore
  public get target(): Object3D | undefined {
    return this._objRef?.target;
  }
  @Input()
  public set castShadow(value: boolean) {
    if (this._objRef) {
      this._objRef.castShadow = value;
    }
  }

  // @ts-ignore
  public get castShadow(): boolean | undefined {
    return this._objRef?.castShadow;
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
  public set distance(value: number) {
    if (this._objRef) {
      this._objRef.distance = value;
    }
  }

  // @ts-ignore
  public get distance(): number | undefined {
    return this._objRef?.distance;
  }
  @Input()
  public set angle(value: number) {
    if (this._objRef) {
      this._objRef.angle = value;
    }
  }

  // @ts-ignore
  public get angle(): number | undefined {
    return this._objRef?.angle;
  }
  @Input()
  public set decay(value: number) {
    if (this._objRef) {
      this._objRef.decay = value;
    }
  }

  // @ts-ignore
  public get decay(): number | undefined {
    return this._objRef?.decay;
  }
  @Input()
  public set shadow(value: SpotLightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  // @ts-ignore
  public get shadow(): SpotLightShadow | undefined {
    return this._objRef?.shadow;
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
  @Input()
  public set penumbra(value: number) {
    if (this._objRef) {
      this._objRef.penumbra = value;
    }
  }

  // @ts-ignore
  public get penumbra(): number | undefined {
    return this._objRef?.penumbra;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  // @ts-ignore
  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
}
