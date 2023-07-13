/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { BufferGeometry, LineSegments, Material } from 'three';
import { ThLine } from './ThLine';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lineSegments',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
  ],
})
export class ThLineSegments<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends LineSegments<TGeometry, TMaterial> = LineSegments<
    TGeometry,
    TMaterial
  >,
  TARGS = [geometry?: TGeometry, material?: TMaterial]
> extends ThLine<TGeometry, TMaterial, T, TARGS> {
  public getType(): Type<LineSegments<TGeometry, TMaterial>> {
    return LineSegments;
  }

  // @ts-ignore
  public get isLineSegments(): true | undefined {
    return this._objRef?.isLineSegments;
  }
  // @ts-ignore
  public get type(): (string | 'LineSegments') | undefined {
    return this._objRef?.type;
  }
}
