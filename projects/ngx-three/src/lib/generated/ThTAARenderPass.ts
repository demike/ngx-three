/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { Camera, ColorRepresentation, Scene } from 'three';
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThSSAARenderPass } from './ThSSAARenderPass';

@Component({
  selector: 'th-tAARenderPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThTAARenderPass) },
  ],
})
export class ThTAARenderPass<
  T extends TAARenderPass = TAARenderPass,
  TARGS = [
    scene: Scene,
    camera: Camera,
    clearColor?: ColorRepresentation,
    clearAlpha?: number,
  ],
> extends ThSSAARenderPass<T, TARGS> {
  public getType(): Type<TAARenderPass> {
    return TAARenderPass;
  }

  @Input()
  public set accumulate(value: boolean) {
    if (this._objRef) {
      this._objRef.accumulate = value;
    }
  }

  public get accumulate(): boolean | undefined {
    return this._objRef?.accumulate;
  }
}
