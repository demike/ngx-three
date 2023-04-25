/* eslint-disable @typescript-eslint/ban-types */
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
import { Camera, Scene } from 'three';
import { MaskPass } from 'three/examples/jsm/postprocessing/MaskPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-maskPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThMaskPass) },
  ],
})
export class ThMaskPass<
  T extends MaskPass = MaskPass,
  TARGS = [scene: Scene, camera: Camera]
> extends ThPass<T, TARGS> {
  public getType(): Type<MaskPass> {
    return MaskPass;
  }

  @Input()
  public set scene(value: Scene) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set inverse(value: boolean) {
    if (this._objRef) {
      this._objRef.inverse = value;
    }
  }
}
