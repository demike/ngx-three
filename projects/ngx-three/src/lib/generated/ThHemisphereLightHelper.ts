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
import { HemisphereLightHelper, Object3DEventMap } from 'three';
import { HemisphereLight } from 'three/src/lights/HemisphereLight.js';
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-hemisphereLightHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightHelper),
    },
  ],
})
export class ThHemisphereLightHelper<
  T extends HemisphereLightHelper = HemisphereLightHelper,
  TARGS = [light: HemisphereLight, size?: number, color?: ColorRepresentation],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<HemisphereLightHelper> {
    return HemisphereLightHelper;
  }

  @Input()
  public set light(value: HemisphereLight) {
    if (this._objRef) {
      this._objRef.light = value;
    }
  }

  public get light(): HemisphereLight | undefined {
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
  public set material(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  public get material(): MeshBasicMaterial | undefined {
    return this._objRef?.material;
  }
}
