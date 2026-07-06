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
import { DirectionalLightHelper, Object3DEventMap } from 'three';
import { DirectionalLight } from 'three/src/lights/DirectionalLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { Line } from 'three/src/objects/Line.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-directionalLightHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThDirectionalLightHelper),
    },
  ],
})
export class ThDirectionalLightHelper<
  T extends DirectionalLightHelper = DirectionalLightHelper,
  TARGS = [light: DirectionalLight, size?: number, color?: ColorRepresentation],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<DirectionalLightHelper> {
    return DirectionalLightHelper;
  }

  @Input()
  public set light(value: DirectionalLight) {
    if (this._objRef) {
      this._objRef.light = value;
    }
  }

  public get light(): DirectionalLight | undefined {
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
  public set lightPlane(value: Line) {
    if (this._objRef) {
      this._objRef.lightPlane = value;
    }
  }

  public get lightPlane(): Line | undefined {
    return this._objRef?.lightPlane;
  }
  @Input()
  public set targetLine(value: Line) {
    if (this._objRef) {
      this._objRef.targetLine = value;
    }
  }

  public get targetLine(): Line | undefined {
    return this._objRef?.targetLine;
  }
}
