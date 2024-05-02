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
  ColorRepresentation,
  DirectionalLight,
  DirectionalLightHelper,
  Line,
  Matrix4,
  Object3DEventMap,
} from 'three';
import { applyValue } from '../util';
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

  public get type(): (string | 'DirectionalLightHelper') | undefined {
    return this._objRef?.type;
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
  public set light(value: DirectionalLight) {
    if (this._objRef) {
      this._objRef.light = value;
    }
  }

  public get light(): DirectionalLight | undefined {
    return this._objRef?.light;
  }
  @Input()
  public set matrix(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix4>(this._objRef.matrix, value);
    }
  }
  public get matrix(): Matrix4 | undefined {
    return this._objRef?.matrix;
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  public get matrixAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixAutoUpdate;
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
  public set targetLine(value: Line) {
    if (this._objRef) {
      this._objRef.targetLine = value;
    }
  }

  public get targetLine(): Line | undefined {
    return this._objRef?.targetLine;
  }
}
