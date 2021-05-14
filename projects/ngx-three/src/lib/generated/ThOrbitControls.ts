/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, MOUSE, TOUCH, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-orbitControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThControlBase, useExisting: forwardRef(() => ThOrbitControls) }]
})
export class ThOrbitControls<
  T extends OrbitControls = OrbitControls,
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<OrbitControls> {
    return OrbitControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement | HTMLDocument) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  @Input()
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target = applyValue<Vector3>(this._objRef.target, value);
    }
  }
  @Input()
  public set center(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector3>(this._objRef.center, value);
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
  public set minPolarAngle(value: number) {
    if (this._objRef) {
      this._objRef.minPolarAngle = value;
    }
  }

  @Input()
  public set maxPolarAngle(value: number) {
    if (this._objRef) {
      this._objRef.maxPolarAngle = value;
    }
  }

  @Input()
  public set minAzimuthAngle(value: number) {
    if (this._objRef) {
      this._objRef.minAzimuthAngle = value;
    }
  }

  @Input()
  public set maxAzimuthAngle(value: number) {
    if (this._objRef) {
      this._objRef.maxAzimuthAngle = value;
    }
  }

  @Input()
  public set enableDamping(value: boolean) {
    if (this._objRef) {
      this._objRef.enableDamping = value;
    }
  }

  @Input()
  public set dampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dampingFactor = value;
    }
  }

  @Input()
  public set enableZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.enableZoom = value;
    }
  }

  @Input()
  public set zoomSpeed(value: number) {
    if (this._objRef) {
      this._objRef.zoomSpeed = value;
    }
  }

  @Input()
  public set enableRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.enableRotate = value;
    }
  }

  @Input()
  public set rotateSpeed(value: number) {
    if (this._objRef) {
      this._objRef.rotateSpeed = value;
    }
  }

  @Input()
  public set enablePan(value: boolean) {
    if (this._objRef) {
      this._objRef.enablePan = value;
    }
  }

  @Input()
  public set panSpeed(value: number) {
    if (this._objRef) {
      this._objRef.panSpeed = value;
    }
  }

  @Input()
  public set screenSpacePanning(value: boolean) {
    if (this._objRef) {
      this._objRef.screenSpacePanning = value;
    }
  }

  @Input()
  public set keyPanSpeed(value: number) {
    if (this._objRef) {
      this._objRef.keyPanSpeed = value;
    }
  }

  @Input()
  public set autoRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.autoRotate = value;
    }
  }

  @Input()
  public set autoRotateSpeed(value: number) {
    if (this._objRef) {
      this._objRef.autoRotateSpeed = value;
    }
  }

  @Input()
  public set enableKeys(value: boolean) {
    if (this._objRef) {
      this._objRef.enableKeys = value;
    }
  }

  @Input()
  public set keys(value: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number }) {
    if (this._objRef) {
      this._objRef.keys = value;
    }
  }

  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this._objRef) {
      this._objRef.mouseButtons = value;
    }
  }

  @Input()
  public set touches(value: { ONE: TOUCH; TWO: TOUCH }) {
    if (this._objRef) {
      this._objRef.touches = value;
    }
  }
}
