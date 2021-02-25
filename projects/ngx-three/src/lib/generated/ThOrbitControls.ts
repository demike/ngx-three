// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera, MOUSE, TOUCH, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-orbitControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThOrbitControls) },
  ],
})
export class ThOrbitControls<
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<TARGS> {
  @Input()
  public obj!: OrbitControls;
  protected getType(): Type<OrbitControls> {
    return OrbitControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.obj) {
      this.obj.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement | HTMLDocument) {
    if (this.obj) {
      this.obj.domElement = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this.obj) {
      this.obj.enabled = value;
    }
  }

  @Input()
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.target = applyValue<Vector3>(this.obj.target, value);
    }
  }
  @Input()
  public set center(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.center = applyValue<Vector3>(this.obj.center, value);
    }
  }
  @Input()
  public set minDistance(value: number) {
    if (this.obj) {
      this.obj.minDistance = value;
    }
  }

  @Input()
  public set maxDistance(value: number) {
    if (this.obj) {
      this.obj.maxDistance = value;
    }
  }

  @Input()
  public set minZoom(value: number) {
    if (this.obj) {
      this.obj.minZoom = value;
    }
  }

  @Input()
  public set maxZoom(value: number) {
    if (this.obj) {
      this.obj.maxZoom = value;
    }
  }

  @Input()
  public set minPolarAngle(value: number) {
    if (this.obj) {
      this.obj.minPolarAngle = value;
    }
  }

  @Input()
  public set maxPolarAngle(value: number) {
    if (this.obj) {
      this.obj.maxPolarAngle = value;
    }
  }

  @Input()
  public set minAzimuthAngle(value: number) {
    if (this.obj) {
      this.obj.minAzimuthAngle = value;
    }
  }

  @Input()
  public set maxAzimuthAngle(value: number) {
    if (this.obj) {
      this.obj.maxAzimuthAngle = value;
    }
  }

  @Input()
  public set enableDamping(value: boolean) {
    if (this.obj) {
      this.obj.enableDamping = value;
    }
  }

  @Input()
  public set dampingFactor(value: number) {
    if (this.obj) {
      this.obj.dampingFactor = value;
    }
  }

  @Input()
  public set enableZoom(value: boolean) {
    if (this.obj) {
      this.obj.enableZoom = value;
    }
  }

  @Input()
  public set zoomSpeed(value: number) {
    if (this.obj) {
      this.obj.zoomSpeed = value;
    }
  }

  @Input()
  public set enableRotate(value: boolean) {
    if (this.obj) {
      this.obj.enableRotate = value;
    }
  }

  @Input()
  public set rotateSpeed(value: number) {
    if (this.obj) {
      this.obj.rotateSpeed = value;
    }
  }

  @Input()
  public set enablePan(value: boolean) {
    if (this.obj) {
      this.obj.enablePan = value;
    }
  }

  @Input()
  public set panSpeed(value: number) {
    if (this.obj) {
      this.obj.panSpeed = value;
    }
  }

  @Input()
  public set screenSpacePanning(value: boolean) {
    if (this.obj) {
      this.obj.screenSpacePanning = value;
    }
  }

  @Input()
  public set keyPanSpeed(value: number) {
    if (this.obj) {
      this.obj.keyPanSpeed = value;
    }
  }

  @Input()
  public set autoRotate(value: boolean) {
    if (this.obj) {
      this.obj.autoRotate = value;
    }
  }

  @Input()
  public set autoRotateSpeed(value: number) {
    if (this.obj) {
      this.obj.autoRotateSpeed = value;
    }
  }

  @Input()
  public set enableKeys(value: boolean) {
    if (this.obj) {
      this.obj.enableKeys = value;
    }
  }

  @Input()
  public set keys(value: {
    LEFT: number;
    UP: number;
    RIGHT: number;
    BOTTOM: number;
  }) {
    if (this.obj) {
      this.obj.keys = value;
    }
  }

  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this.obj) {
      this.obj.mouseButtons = value;
    }
  }

  @Input()
  public set touches(value: { ONE: TOUCH; TWO: TOUCH }) {
    if (this.obj) {
      this.obj.touches = value;
    }
  }
}
