/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  BoxHelper,
  BufferGeometry,
  ColorRepresentation,
  Material,
  Object3D,
} from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-boxHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
  ],
})
export class ThBoxHelper<
  T extends BoxHelper = BoxHelper,
  TARGS = [object: Object3D, color?: ColorRepresentation]
> extends ThLineSegments<BufferGeometry, Material | Material[], T, TARGS> {
  public getType(): Type<BoxHelper> {
    return BoxHelper;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
