/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { AmbientLight, ColorRepresentation } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-ambientLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  // @ts-ignore
  public get isAmbientLight(): true | undefined {
    return this._objRef?.isAmbientLight;
  }
  // @ts-ignore
  public get type(): (string | 'AmbientLight') | undefined {
    return this._objRef?.type;
  }
}
