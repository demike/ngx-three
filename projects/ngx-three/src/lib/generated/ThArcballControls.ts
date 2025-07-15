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
import { Camera, Scene } from 'three';
import {
  ArcballControls,
  ArcballControlsEventMap,
} from 'three/examples/jsm/controls/ArcballControls.js';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-arcballControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThArcballControls),
    },
  ],
})
export class ThArcballControls<
  T extends ArcballControls = ArcballControls,
  TARGS = [
    camera: Camera,
    domElement?: HTMLElement | null,
    scene?: Scene | null,
  ],
> extends ThControlBase<ArcballControlsEventMap, T, TARGS> {
  public getType(): Type<ArcballControls> {
    return ArcballControls;
  }

  @Input()
  public set scene(value: Scene | null) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  public get scene(): (Scene | null) | undefined {
    return this._objRef?.scene;
  }
  @Input()
  public set radiusFactor(value: number) {
    if (this._objRef) {
      this._objRef.radiusFactor = value;
    }
  }

  public get radiusFactor(): number | undefined {
    return this._objRef?.radiusFactor;
  }
  @Input()
  public set focusAnimationTime(value: number) {
    if (this._objRef) {
      this._objRef.focusAnimationTime = value;
    }
  }

  public get focusAnimationTime(): number | undefined {
    return this._objRef?.focusAnimationTime;
  }
  @Input()
  public set adjustNearFar(value: boolean) {
    if (this._objRef) {
      this._objRef.adjustNearFar = value;
    }
  }

  public get adjustNearFar(): boolean | undefined {
    return this._objRef?.adjustNearFar;
  }
  @Input()
  public set scaleFactor(value: number) {
    if (this._objRef) {
      this._objRef.scaleFactor = value;
    }
  }

  public get scaleFactor(): number | undefined {
    return this._objRef?.scaleFactor;
  }
  @Input()
  public set dampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dampingFactor = value;
    }
  }

  public get dampingFactor(): number | undefined {
    return this._objRef?.dampingFactor;
  }
  @Input()
  public set wMax(value: number) {
    if (this._objRef) {
      this._objRef.wMax = value;
    }
  }

  public get wMax(): number | undefined {
    return this._objRef?.wMax;
  }
  @Input()
  public set enableAnimations(value: boolean) {
    if (this._objRef) {
      this._objRef.enableAnimations = value;
    }
  }

  public get enableAnimations(): boolean | undefined {
    return this._objRef?.enableAnimations;
  }
  @Input()
  public set enableFocus(value: boolean) {
    if (this._objRef) {
      this._objRef.enableFocus = value;
    }
  }

  public get enableFocus(): boolean | undefined {
    return this._objRef?.enableFocus;
  }
  @Input()
  public set enableGrid(value: boolean) {
    if (this._objRef) {
      this._objRef.enableGrid = value;
    }
  }

  public get enableGrid(): boolean | undefined {
    return this._objRef?.enableGrid;
  }
  @Input()
  public set cursorZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.cursorZoom = value;
    }
  }

  public get cursorZoom(): boolean | undefined {
    return this._objRef?.cursorZoom;
  }
  @Input()
  public set rotateSpeed(value: number) {
    if (this._objRef) {
      this._objRef.rotateSpeed = value;
    }
  }

  public get rotateSpeed(): number | undefined {
    return this._objRef?.rotateSpeed;
  }
  @Input()
  public set enablePan(value: boolean) {
    if (this._objRef) {
      this._objRef.enablePan = value;
    }
  }

  public get enablePan(): boolean | undefined {
    return this._objRef?.enablePan;
  }
  @Input()
  public set enableRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.enableRotate = value;
    }
  }

  public get enableRotate(): boolean | undefined {
    return this._objRef?.enableRotate;
  }
  @Input()
  public set enableZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.enableZoom = value;
    }
  }

  public get enableZoom(): boolean | undefined {
    return this._objRef?.enableZoom;
  }
  @Input()
  public set minDistance(value: number) {
    if (this._objRef) {
      this._objRef.minDistance = value;
    }
  }

  public get minDistance(): number | undefined {
    return this._objRef?.minDistance;
  }
  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  public get maxDistance(): number | undefined {
    return this._objRef?.maxDistance;
  }
  @Input()
  public set minZoom(value: number) {
    if (this._objRef) {
      this._objRef.minZoom = value;
    }
  }

  public get minZoom(): number | undefined {
    return this._objRef?.minZoom;
  }
  @Input()
  public set maxZoom(value: number) {
    if (this._objRef) {
      this._objRef.maxZoom = value;
    }
  }

  public get maxZoom(): number | undefined {
    return this._objRef?.maxZoom;
  }
}
