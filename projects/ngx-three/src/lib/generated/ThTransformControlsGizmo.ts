/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Event, Object3D } from 'three';
import { TransformControlsGizmo } from 'three/examples/jsm/controls/TransformControls';
import { ThControlBase } from '../ThControlBase';
import { ThObject3D } from './ThObject3D';

@Component({
    selector: 'th-transformControlsGizmo',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ThControlBase,
            useExisting: forwardRef(() => ThTransformControlsGizmo),
        },
    ],
    standalone: false
})
export class ThTransformControlsGizmo<
  T extends TransformControlsGizmo = TransformControlsGizmo,
  TARGS = [],
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<TransformControlsGizmo> {
    return TransformControlsGizmo;
  }

  @Input()
  public set type(value: 'TransformControlsGizmo') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set isTransformControlsGizmo(value: true) {
    if (this._objRef) {
      this._objRef.isTransformControlsGizmo = value;
    }
  }

  @Input()
  public set gizmo(value: { translate: Object3D; rotate: Object3D; scale: Object3D }) {
    if (this._objRef) {
      this._objRef.gizmo = value;
    }
  }

  @Input()
  public set helper(value: { translate: Object3D; rotate: Object3D; scale: Object3D }) {
    if (this._objRef) {
      this._objRef.helper = value;
    }
  }

  @Input()
  public set picker(value: { translate: Object3D; rotate: Object3D; scale: Object3D }) {
    if (this._objRef) {
      this._objRef.picker = value;
    }
  }
}
