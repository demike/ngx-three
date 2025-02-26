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
import { SpotLight, Vector3 } from 'three';
import { Object3D } from 'three/src/core/Object3D.js';
import { SpotLightShadow } from 'three/src/lights/SpotLightShadow.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { Texture } from 'three/src/textures/Texture.js';
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
    standalone: false
})
export class ThSpotLight<
  T extends SpotLight = SpotLight,
  TARGS = [
    color?: ColorRepresentation,
    intensity?: number,
    distance?: number,
    angle?: number,
    penumbra?: number,
    decay?: number,
  ],
> extends ThLight<SpotLightShadow, T, TARGS> {
  public getType(): Type<SpotLight> {
    return SpotLight;
  }

  public get isSpotLight(): true | undefined {
    return this._objRef?.isSpotLight;
  }
  public get type(): (string | 'SpotLight') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.position, value);
    }
  }
  public get position(): Vector3 | undefined {
    return this._objRef?.position;
  }
  @Input()
  public set target(value: Object3D) {
    if (this._objRef) {
      this._objRef.target = value;
    }
  }

  public get target(): Object3D | undefined {
    return this._objRef?.target;
  }
  @Input()
  public set castShadow(value: boolean) {
    if (this._objRef) {
      this._objRef.castShadow = value;
    }
  }

  public get castShadow(): boolean | undefined {
    return this._objRef?.castShadow;
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
  public set distance(value: number) {
    if (this._objRef) {
      this._objRef.distance = value;
    }
  }

  public get distance(): number | undefined {
    return this._objRef?.distance;
  }
  @Input()
  public set angle(value: number) {
    if (this._objRef) {
      this._objRef.angle = value;
    }
  }

  public get angle(): number | undefined {
    return this._objRef?.angle;
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
  public set shadow(value: SpotLightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  public get shadow(): SpotLightShadow | undefined {
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
  @Input()
  public set penumbra(value: number) {
    if (this._objRef) {
      this._objRef.penumbra = value;
    }
  }

  public get penumbra(): number | undefined {
    return this._objRef?.penumbra;
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
}
