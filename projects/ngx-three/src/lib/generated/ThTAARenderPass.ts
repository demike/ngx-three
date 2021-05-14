/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, Color, Scene } from 'three';
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass';
import { ThPassBase } from '../ThPassBase';
import { ThSSAARenderPass } from './ThSSAARenderPass';

@Component({
  selector: 'th-tAARenderPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThTAARenderPass) }]
})
export class ThTAARenderPass<
  T extends TAARenderPass = TAARenderPass,
  TARGS extends any[] = [scene: Scene, camera: Camera, clearColor: Color | string | number, clearAlpha: number]
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
}
