import { Component, forwardRef, Input, Self, SkipSelf } from '@angular/core';
import { Color, PointLight, PointLightHelper } from 'three';
import { ThArgs } from '../ThArgs';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-pointLightHelper',
  inputs: ['type', 'light', 'color', 'matrixAutoUpdate'],
  template: '',
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
  ],
})
export class ThPointLightHelper extends PointLightHelper {
  @Input('matrix')
  public set __matrix(test: any) {
    this.matrix = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [light: PointLight, sphereSize: number, color: Color | string | number]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [light: PointLight, sphereSize: number, color: Color | string | number]
  ) {
    /* nothing to do */
  }
}
