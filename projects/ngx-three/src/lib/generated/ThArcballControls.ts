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
import { Camera, Scene, Vector3 } from 'three';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-arcballControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThArcballControls),
    },
  ],
})
export class ThArcballControls<
  T extends ArcballControls = ArcballControls,
  TARGS = [camera: Camera, domElement: HTMLElement, scene?: Scene | null]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<ArcballControls> {
    return ArcballControls;
  }

  @Input()
  public set camera(value: Camera | null) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  @Input()
  public set scene(value: Scene | null | undefined) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  @Input()
  public set focusAnimationTime(value: number) {
    if (this._objRef) {
      this._objRef.focusAnimationTime = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  @Input()
  public set enablePan(value: boolean) {
    if (this._objRef) {
      this._objRef.enablePan = value;
    }
  }

  @Input()
  public set enableRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.enableRotate = value;
    }
  }

  @Input()
  public set enableZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.enableZoom = value;
    }
  }

  @Input()
  public set enableGizmos(value: boolean) {
    if (this._objRef) {
      this._objRef.enableGizmos = value;
    }
  }

  @Input()
  public set adjustNearFar(value: boolean) {
    if (this._objRef) {
      this._objRef.adjustNearFar = value;
    }
  }

  @Input()
  public set scaleFactor(value: number) {
    if (this._objRef) {
      this._objRef.scaleFactor = value;
    }
  }

  @Input()
  public set dampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dampingFactor = value;
    }
  }

  @Input()
  public set wMax(value: number) {
    if (this._objRef) {
      this._objRef.wMax = value;
    }
  }

  @Input()
  public set enableAnimations(value: boolean) {
    if (this._objRef) {
      this._objRef.enableAnimations = value;
    }
  }

  @Input()
  public set enableGrid(value: boolean) {
    if (this._objRef) {
      this._objRef.enableGrid = value;
    }
  }

  @Input()
  public set cursorZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.cursorZoom = value;
    }
  }

  @Input()
  public set minFov(value: number) {
    if (this._objRef) {
      this._objRef.minFov = value;
    }
  }

  @Input()
  public set maxFov(value: number) {
    if (this._objRef) {
      this._objRef.maxFov = value;
    }
  }

  @Input()
  public set minDistance(value: number) {
    if (this._objRef) {
      this._objRef.minDistance = value;
    }
  }

  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  @Input()
  public set minZoom(value: number) {
    if (this._objRef) {
      this._objRef.minZoom = value;
    }
  }

  @Input()
  public set maxZoom(value: number) {
    if (this._objRef) {
      this._objRef.maxZoom = value;
    }
  }

  @Input()
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target = applyValue<Vector3>(this._objRef.target, value);
    }
  }
  @Input()
  public set radiusFactor(value: number) {
    if (this._objRef) {
      this._objRef.radiusFactor = value;
    }
  }
}
