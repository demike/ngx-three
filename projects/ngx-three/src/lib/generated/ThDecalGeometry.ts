/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { Euler, Mesh, Vector3 } from 'three';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-decalGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThDecalGeometry),
    },
  ],
})
export class ThDecalGeometry<
  T extends DecalGeometry = DecalGeometry,
  TARGS extends any[] = [
    mesh: Mesh,
    position: Vector3,
    orientation: Euler,
    size: Vector3
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<DecalGeometry> {
    return DecalGeometry;
  }
}
