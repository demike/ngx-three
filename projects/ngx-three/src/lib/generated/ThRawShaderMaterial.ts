/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { RawShaderMaterial, ShaderMaterialParameters } from 'three';
import { ThMaterial } from './ThMaterial';
import { ThShaderMaterial } from './ThShaderMaterial';

@Component({
  selector: 'th-rawShaderMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThRawShaderMaterial) },
  ],
})
export class ThRawShaderMaterial<
  T extends RawShaderMaterial = RawShaderMaterial,
  TARGS = /* parameters? */ ShaderMaterialParameters,
> extends ThShaderMaterial<T, TARGS> {
  public getType(): Type<RawShaderMaterial> {
    return RawShaderMaterial;
  }
}
