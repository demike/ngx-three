/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { Camera } from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls';
import { ThControlBase } from '../ThControlBase';
import { ThOrbitControls } from './ThOrbitControls';

@Component({
  selector: 'th-mapControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThMapControls) },
  ],
})
export class ThMapControls<
  T extends MapControls = MapControls,
  TARGS = [object: Camera, domElement?: HTMLElement],
> extends ThOrbitControls<T, TARGS> {
  public getType(): Type<MapControls> {
    return MapControls;
  }
}
