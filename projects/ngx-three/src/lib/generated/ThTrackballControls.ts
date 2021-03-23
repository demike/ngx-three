/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
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
      useExisting: forwardRef(() => ThTrackballControls)
    }
  ]
})
export class ThTrackballControls<TARGS extends any[] = [object: Camera, domElement?: HTMLElement]> extends ThControlBase<TARGS> {
  @Input()
  public objRef!: TrackballControls;
  protected getType(): Type<TrackballControls> {
    return TrackballControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.objRef) {
      this.objRef.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement) {
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
  public set screen(value: { left: number; top: number; width: number; height: number }) {
    if (this.objRef) {
      this.objRef.screen = value;
    }
  }

  @Input()
  public set rotateSpeed(value: number) {
    if (this.objRef) {
      this.objRef.rotateSpeed = value;
    }
  }

  @Input()
  public set zoomSpeed(value: number) {
    if (this.objRef) {
      this.objRef.zoomSpeed = value;
    }
  }

  @Input()
  public set panSpeed(value: number) {
    if (this.objRef) {
      this.objRef.panSpeed = value;
    }
  }

  @Input()
  public set noRotate(value: boolean) {
    if (this.objRef) {
      this.objRef.noRotate = value;
    }
  }

  @Input()
  public set noZoom(value: boolean) {
    if (this.objRef) {
      this.objRef.noZoom = value;
    }
  }

  @Input()
  public set noPan(value: boolean) {
    if (this.objRef) {
      this.objRef.noPan = value;
    }
  }

  @Input()
  public set noRoll(value: boolean) {
    if (this.objRef) {
      this.objRef.noRoll = value;
    }
  }

  @Input()
  public set staticMoving(value: boolean) {
    if (this.objRef) {
      this.objRef.staticMoving = value;
    }
  }

  @Input()
  public set dynamicDampingFactor(value: number) {
    if (this.objRef) {
      this.objRef.dynamicDampingFactor = value;
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
  public set keys(value: number[]) {
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
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.target = applyValue<Vector3>(this.objRef.target, value);
    }
  }
  @Input()
  public set position0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.position0 = applyValue<Vector3>(this.objRef.position0, value);
    }
  }
  @Input()
  public set target0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.target0 = applyValue<Vector3>(this.objRef.target0, value);
    }
  }
  @Input()
  public set up0(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.up0 = applyValue<Vector3>(this.objRef.up0, value);
    }
  }
}
