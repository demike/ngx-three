/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { BufferGeometry, ColorRepresentation, GridHelper, Material } from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-gridHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) }]
})
export class ThGridHelper<
  T extends GridHelper = GridHelper,
  TARGS = [size?: number, divisions?: number, color1?: ColorRepresentation, color2?: ColorRepresentation]
> extends ThLineSegments<BufferGeometry, Material | Material[], T, TARGS> {
  public getType(): Type<GridHelper> {
    return GridHelper;
  }

  // @ts-ignore
  public get type(): (string | 'GridHelper') | undefined {
    return this._objRef?.type;
  }
}
