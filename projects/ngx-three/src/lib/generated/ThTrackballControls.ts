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
  T extends TrackballControls = TrackballControls,
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<TrackballControls> {
    return TrackballControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement) {
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
  public set screen(value: {
    left: number;
    top: number;
    width: number;
    height: number;
  }) {
    if (this._objRef) {
      this._objRef.screen = value;
    }
  }

  @Input()
  public set rotateSpeed(value: number) {
    if (this._objRef) {
      this._objRef.rotateSpeed = value;
    }
  }

  @Input()
  public set zoomSpeed(value: number) {
    if (this._objRef) {
      this._objRef.zoomSpeed = value;
    }
  }

  @Input()
  public set panSpeed(value: number) {
    if (this._objRef) {
      this._objRef.panSpeed = value;
    }
  }

  @Input()
  public set noRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.noRotate = value;
    }
  }

  @Input()
  public set noZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.noZoom = value;
    }
  }

  @Input()
  public set noPan(value: boolean) {
    if (this._objRef) {
      this._objRef.noPan = value;
    }
  }

  @Input()
  public set noRoll(value: boolean) {
    if (this._objRef) {
      this._objRef.noRoll = value;
    }
  }

  @Input()
  public set staticMoving(value: boolean) {
    if (this._objRef) {
      this._objRef.staticMoving = value;
    }
  }

  @Input()
  public set dynamicDampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dynamicDampingFactor = value;
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
  public set keys(value: string[]) {
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
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target = applyValue<Vector3>(this._objRef.target, value);
    }
  }
  @Input()
  public set position0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.position0 = applyValue<Vector3>(
        this._objRef.position0,
        value
      );
    }
  }
  @Input()
  public set target0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target0 = applyValue<Vector3>(this._objRef.target0, value);
    }
  }
  @Input()
  public set up0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.up0 = applyValue<Vector3>(this._objRef.up0, value);
    }
  }
}
