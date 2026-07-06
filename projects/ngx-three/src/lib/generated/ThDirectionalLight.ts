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
import { DirectionalLight } from 'three';
import { Object3D } from 'three/src/core/Object3D.js';
import { DirectionalLightShadow } from 'three/src/lights/DirectionalLightShadow.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-directionalLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
  ],
})
export class ThDirectionalLight<
  T extends DirectionalLight = DirectionalLight,
  TARGS = [color?: ColorRepresentation, intensity?: number],
> extends ThLight<T, TARGS> {
  public getType(): Type<DirectionalLight> {
    return DirectionalLight;
  }

  public get isDirectionalLight(): boolean | undefined {
    return this._objRef?.isDirectionalLight;
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
  public set shadow(value: DirectionalLightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  public get shadow(): DirectionalLightShadow | undefined {
    return this._objRef?.shadow;
  }
}
