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
export class ThOrbitControls<TARGS extends any[] = [object: Camera, domElement?: HTMLElement]> extends ThControlBase<TARGS> {
  @Input()
  public objRef!: OrbitControls;
  protected getType(): Type<OrbitControls> {
    return OrbitControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.objRef) {
      this.objRef.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement | HTMLDocument) {
    if (this.objRef) {
      this.objRef.domElement = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this.objRef) {
      this.objRef.enabled = value;
    }
  }

  @Input()
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.target = applyValue<Vector3>(this.objRef.target, value);
    }
  }
  @Input()
  public set center(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.center = applyValue<Vector3>(this.objRef.center, value);
    }
  }
  @Input()
  public set minDistance(value: number) {
    if (this.objRef) {
      this.objRef.minDistance = value;
    }
  }

  @Input()
  public set maxDistance(value: number) {
    if (this.objRef) {
      this.objRef.maxDistance = value;
    }
  }

  @Input()
  public set minZoom(value: number) {
    if (this.objRef) {
      this.objRef.minZoom = value;
    }
  }

  @Input()
  public set maxZoom(value: number) {
    if (this.objRef) {
      this.objRef.maxZoom = value;
    }
  }

  @Input()
  public set minPolarAngle(value: number) {
    if (this.objRef) {
      this.objRef.minPolarAngle = value;
    }
  }

  @Input()
  public set maxPolarAngle(value: number) {
    if (this.objRef) {
      this.objRef.maxPolarAngle = value;
    }
  }

  @Input()
  public set minAzimuthAngle(value: number) {
    if (this.objRef) {
      this.objRef.minAzimuthAngle = value;
    }
  }

  @Input()
  public set maxAzimuthAngle(value: number) {
    if (this.objRef) {
      this.objRef.maxAzimuthAngle = value;
    }
  }

  @Input()
  public set enableDamping(value: boolean) {
    if (this.objRef) {
      this.objRef.enableDamping = value;
    }
  }

  @Input()
  public set dampingFactor(value: number) {
    if (this.objRef) {
      this.objRef.dampingFactor = value;
    }
  }

  @Input()
  public set enableZoom(value: boolean) {
    if (this.objRef) {
      this.objRef.enableZoom = value;
    }
  }

  @Input()
  public set zoomSpeed(value: number) {
    if (this.objRef) {
      this.objRef.zoomSpeed = value;
    }
  }

  @Input()
  public set enableRotate(value: boolean) {
    if (this.objRef) {
      this.objRef.enableRotate = value;
    }
  }

  @Input()
  public set rotateSpeed(value: number) {
    if (this.objRef) {
      this.objRef.rotateSpeed = value;
    }
  }

  @Input()
  public set enablePan(value: boolean) {
    if (this.objRef) {
      this.objRef.enablePan = value;
    }
  }

  @Input()
  public set panSpeed(value: number) {
    if (this.objRef) {
      this.objRef.panSpeed = value;
    }
  }

  @Input()
  public set screenSpacePanning(value: boolean) {
    if (this.objRef) {
      this.objRef.screenSpacePanning = value;
    }
  }

  @Input()
  public set keyPanSpeed(value: number) {
    if (this.objRef) {
      this.objRef.keyPanSpeed = value;
    }
  }

  @Input()
  public set autoRotate(value: boolean) {
    if (this.objRef) {
      this.objRef.autoRotate = value;
    }
  }

  @Input()
  public set autoRotateSpeed(value: number) {
    if (this.objRef) {
      this.objRef.autoRotateSpeed = value;
    }
  }

  @Input()
  public set enableKeys(value: boolean) {
    if (this.objRef) {
      this.objRef.enableKeys = value;
    }
  }

  @Input()
  public set keys(value: { LEFT: number; UP: number; RIGHT: number; BOTTOM: number }) {
    if (this.objRef) {
      this.objRef.keys = value;
    }
  }

  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this.objRef) {
      this.objRef.mouseButtons = value;
    }
  }

  @Input()
  public set touches(value: { ONE: TOUCH; TWO: TOUCH }) {
    if (this.objRef) {
      this.objRef.touches = value;
    }
  }
}
