/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Box3, Box3Helper, BufferGeometry, Color, Material, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-box3Helper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) }]
})
export class ThBox3Helper<T extends Box3Helper = Box3Helper, TARGS extends any[] = [box: Box3, color?: Color]> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  T,
  TARGS
> {
  public getType(): Type<Box3Helper> {
    return Box3Helper;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set box(value: Box3 | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.box = applyValue<Box3>(this._objRef.box, value);
    }
  }
}
