/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { AmbientLight } from 'three';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-ambientLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLight) },
  ],
})
export class ThAmbientLight<
  T extends AmbientLight = AmbientLight,
  TARGS = [color?: ColorRepresentation, intensity?: number],
> extends ThLight<undefined, T, TARGS> {
  public getType(): Type<AmbientLight> {
    return AmbientLight;
  }

  public get isAmbientLight(): true | undefined {
    return this._objRef?.isAmbientLight;
  }
  public get type(): (string | 'AmbientLight') | undefined {
    return this._objRef?.type;
  }
}
