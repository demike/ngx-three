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
  DirectionalLight,
  DirectionalLightShadow,
  Object3D,
  Vector3,
} from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-directionalLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
  ],
})
export class ThDirectionalLight<
  T extends DirectionalLight = DirectionalLight,
  TARGS = [color?: ColorRepresentation, intensity?: number]
> extends ThLight<T, TARGS> {
  public getType(): Type<DirectionalLight> {
    return DirectionalLight;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.position, value);
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
  public set shadow(value: DirectionalLightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  // @ts-ignore
  public get shadow(): DirectionalLightShadow | undefined {
    return this._objRef?.shadow;
  }
  // @ts-ignore
  public get isDirectionalLight(): true | undefined {
    return this._objRef?.isDirectionalLight;
  }
}
