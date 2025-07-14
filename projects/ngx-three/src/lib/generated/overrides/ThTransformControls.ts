/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix,  */
import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, Type, inject } from '@angular/core';
import { Camera, Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { ThControlBase } from '../../ThControlBase';
import { ThTransformControlsGen } from '../ThTransformControlsGen';
import { ThScene } from '../ThScene';

@Component({
  selector: 'th-transformControls',
  template: '<ng-content/>',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTransformControls),
    },
  ],
})
export class ThTransformControls<
    T extends TransformControls = TransformControls,
    TARGS = [object: Camera, domElement?: HTMLElement],
  >
  extends ThTransformControlsGen<T, TARGS>
  implements OnDestroy
{
  protected scene = inject(ThScene);

  private targetObject: Object3D | undefined;

  public getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set object(value: Object3D | undefined) {
    if (this._objRef) {
      this.removeObjectListeners();
      this.targetObject = value;
      this.addObjectListeners();
      if (value) {
        this.objectAdded();
      } else {
        this.objectRemoved();
      }
    }
  }

  protected objectAdded = () => {
    if (this.objRef && this.targetObject != null && this.targetObject.parent) {
      this.objRef.attach(this.targetObject);
    }
  };

  protected objectRemoved = () => {
    this._objRef?.detach();
  };

  public addToParent(): void {
    if (this._objRef && !this._objRef.object) {
      this.scene?.objRef?.add(this._objRef.object);
    }
  }

  public removeFromParent(): void {
    if (this._objRef) {
      this.scene?.objRef?.remove(this._objRef.object);
    }
  }

  public ngOnDestroy(): void {
    this.removeObjectListeners();
    this.objectRemoved();
    this.targetObject = undefined;
  }

  protected removeObjectListeners(): void {
    if (this.targetObject) {
      this.targetObject.removeEventListener('added', this.objectAdded);
      this.targetObject.removeEventListener('removed', this.objectRemoved);
    }
  }

  protected addObjectListeners(): void {
    this.targetObject?.addEventListener('added', this.objectAdded);
    this.targetObject?.addEventListener('removed', this.objectRemoved);
  }
}
