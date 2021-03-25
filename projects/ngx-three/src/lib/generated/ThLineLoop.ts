/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BufferGeometry, Geometry, LineLoop, Material } from 'three';
import { ThLine } from './ThLine';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lineLoop',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
  ],
})
export class ThLineLoop<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends LineLoop<TGeometry, TMaterial> = LineLoop<TGeometry, TMaterial>,
  TARGS extends any[] = [geometry?: TGeometry, material?: TMaterial]
> extends ThLine<TGeometry, TMaterial, T, TARGS> {
  protected getType(): Type<LineLoop<TGeometry, TMaterial>> {
    return LineLoop;
  }

  @Input()
  public set type(value: 'LineLoop') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
