/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera, MOUSE, Vector3 } from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-trackballControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTrackballControls),
    },
  ],
})
export class ThTrackballControls<
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<TARGS> {
  @Input()
  public obj!: TrackballControls;
  protected getType(): Type<TrackballControls> {
    return TrackballControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.obj) {
      this.obj.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement) {
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
  public set screen(value: {
    left: number;
    top: number;
    width: number;
    height: number;
  }) {
    if (this.obj) {
      this.obj.screen = value;
    }
  }

  @Input()
  public set rotateSpeed(value: number) {
    if (this.obj) {
      this.obj.rotateSpeed = value;
    }
  }

  @Input()
  public set zoomSpeed(value: number) {
    if (this.obj) {
      this.obj.zoomSpeed = value;
    }
  }

  @Input()
  public set panSpeed(value: number) {
    if (this.obj) {
      this.obj.panSpeed = value;
    }
  }

  @Input()
  public set noRotate(value: boolean) {
    if (this.obj) {
      this.obj.noRotate = value;
    }
  }

  @Input()
  public set noZoom(value: boolean) {
    if (this.obj) {
      this.obj.noZoom = value;
    }
  }

  @Input()
  public set noPan(value: boolean) {
    if (this.obj) {
      this.obj.noPan = value;
    }
  }

  @Input()
  public set noRoll(value: boolean) {
    if (this.obj) {
      this.obj.noRoll = value;
    }
  }

  @Input()
  public set staticMoving(value: boolean) {
    if (this.obj) {
      this.obj.staticMoving = value;
    }
  }

  @Input()
  public set dynamicDampingFactor(value: number) {
    if (this.obj) {
      this.obj.dynamicDampingFactor = value;
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
  public set keys(value: number[]) {
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
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.target = applyValue<Vector3>(this.obj.target, value);
    }
  }
  @Input()
  public set position0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.position0 = applyValue<Vector3>(this.obj.position0, value);
    }
  }
  @Input()
  public set target0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.target0 = applyValue<Vector3>(this.obj.target0, value);
    }
  }
  @Input()
  public set up0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.up0 = applyValue<Vector3>(this.obj.up0, value);
    }
  }
}
