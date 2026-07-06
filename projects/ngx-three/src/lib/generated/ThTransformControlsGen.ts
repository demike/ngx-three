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
import { Camera, Object3D, Vector4 } from 'three';
import {
  TransformControls,
  TransformControlsEventMap,
  TransformControlsMode,
} from 'three/examples/jsm/controls/TransformControls.js';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-transformControlsGen',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTransformControlsGen),
    },
  ],
})
export class ThTransformControlsGen<
  T extends TransformControls = TransformControls,
  TARGS = [camera: Camera, domElement?: HTMLElement | SVGElement | null],
> extends ThControlBase<TransformControlsEventMap, Object3D, T, TARGS> {
  public getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set axis(
    value: 'X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null,
  ) {
    if (this._objRef) {
      this._objRef.axis = value;
    }
  }

  public get axis():
    | ('X' | 'Y' | 'Z' | 'E' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'XYZE' | null)
    | undefined {
    return this._objRef?.axis;
  }
  @Input()
  public set mode(value: TransformControlsMode) {
    if (this._objRef) {
      this._objRef.mode = value;
    }
  }

  public get mode(): TransformControlsMode | undefined {
    return this._objRef?.mode;
  }
  @Input()
  public set translationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.translationSnap = value;
    }
  }

  public get translationSnap(): (number | null) | undefined {
    return this._objRef?.translationSnap;
  }
  @Input()
  public set rotationSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.rotationSnap = value;
    }
  }

  public get rotationSnap(): (number | null) | undefined {
    return this._objRef?.rotationSnap;
  }
  @Input()
  public set scaleSnap(value: number | null) {
    if (this._objRef) {
      this._objRef.scaleSnap = value;
    }
  }

  public get scaleSnap(): (number | null) | undefined {
    return this._objRef?.scaleSnap;
  }
  @Input()
  public set space(value: 'world' | 'local') {
    if (this._objRef) {
      this._objRef.space = value;
    }
  }

  public get space(): ('world' | 'local') | undefined {
    return this._objRef?.space;
  }
  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  public get size(): number | undefined {
    return this._objRef?.size;
  }
  @Input()
  public set viewport(
    value: Vector4 | null | [x: number, y: number, z: number, w: number],
  ) {
    if (this._objRef) {
      this._objRef.viewport = applyValue<Vector4 | null>(
        this._objRef.viewport,
        value,
      );
    }
  }
  public get viewport(): (Vector4 | null) | undefined {
    return this._objRef?.viewport;
  }
  @Input()
  public set dragging(value: boolean) {
    if (this._objRef) {
      this._objRef.dragging = value;
    }
  }

  public get dragging(): boolean | undefined {
    return this._objRef?.dragging;
  }
  @Input()
  public set showX(value: boolean) {
    if (this._objRef) {
      this._objRef.showX = value;
    }
  }

  public get showX(): boolean | undefined {
    return this._objRef?.showX;
  }
  @Input()
  public set showY(value: boolean) {
    if (this._objRef) {
      this._objRef.showY = value;
    }
  }

  public get showY(): boolean | undefined {
    return this._objRef?.showY;
  }
  @Input()
  public set showZ(value: boolean) {
    if (this._objRef) {
      this._objRef.showZ = value;
    }
  }

  public get showZ(): boolean | undefined {
    return this._objRef?.showZ;
  }
  @Input()
  public set showXY(value: boolean) {
    if (this._objRef) {
      this._objRef.showXY = value;
    }
  }

  public get showXY(): boolean | undefined {
    return this._objRef?.showXY;
  }
  @Input()
  public set showYZ(value: boolean) {
    if (this._objRef) {
      this._objRef.showYZ = value;
    }
  }

  public get showYZ(): boolean | undefined {
    return this._objRef?.showYZ;
  }
  @Input()
  public set showXZ(value: boolean) {
    if (this._objRef) {
      this._objRef.showXZ = value;
    }
  }

  public get showXZ(): boolean | undefined {
    return this._objRef?.showXZ;
  }
  @Input()
  public set showXYZE(value: boolean) {
    if (this._objRef) {
      this._objRef.showXYZE = value;
    }
  }

  public get showXYZE(): boolean | undefined {
    return this._objRef?.showXYZE;
  }
  @Input()
  public set showE(value: boolean) {
    if (this._objRef) {
      this._objRef.showE = value;
    }
  }

  public get showE(): boolean | undefined {
    return this._objRef?.showE;
  }
  @Input()
  public set minx(value: number) {
    if (this._objRef) {
      this._objRef.minx = value;
    }
  }

  public get minx(): number | undefined {
    return this._objRef?.minx;
  }
  @Input()
  public set maxX(value: number) {
    if (this._objRef) {
      this._objRef.maxX = value;
    }
  }

  public get maxX(): number | undefined {
    return this._objRef?.maxX;
  }
  @Input()
  public set minY(value: number) {
    if (this._objRef) {
      this._objRef.minY = value;
    }
  }

  public get minY(): number | undefined {
    return this._objRef?.minY;
  }
  @Input()
  public set maxY(value: number) {
    if (this._objRef) {
      this._objRef.maxY = value;
    }
  }

  public get maxY(): number | undefined {
    return this._objRef?.maxY;
  }
  @Input()
  public set minZ(value: number) {
    if (this._objRef) {
      this._objRef.minZ = value;
    }
  }

  public get minZ(): number | undefined {
    return this._objRef?.minZ;
  }
  @Input()
  public set maxZ(value: number) {
    if (this._objRef) {
      this._objRef.maxZ = value;
    }
  }

  public get maxZ(): number | undefined {
    return this._objRef?.maxZ;
  }
}
