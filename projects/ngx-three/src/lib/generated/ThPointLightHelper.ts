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
import {
  BufferGeometry,
  Material,
  Object3DEventMap,
  PointLightHelper,
} from 'three';
import { PointLight } from 'three/src/lights/PointLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-pointLightHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
  ],
})
export class ThPointLightHelper<
  T extends PointLightHelper = PointLightHelper,
  TARGS = [light: PointLight, sphereSize?: number, color?: ColorRepresentation],
> extends ThMesh<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<PointLightHelper> {
    return PointLightHelper;
  }

  @Input()
  public set light(value: PointLight) {
    if (this._objRef) {
      this._objRef.light = value;
    }
  }

  public get light(): PointLight | undefined {
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
}
