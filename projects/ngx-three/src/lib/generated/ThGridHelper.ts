/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BufferGeometry, Color, Geometry, GridHelper, Material } from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-gridHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
  ],
})
export class ThGridHelper<
  T extends GridHelper = GridHelper,
  TARGS extends any[] = [
    size?: number,
    divisions?: number,
    color1?: Color | string | number,
    color2?: Color | string | number
  ]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  T,
  TARGS
> {
  protected getType(): Type<GridHelper> {
    return GridHelper;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
