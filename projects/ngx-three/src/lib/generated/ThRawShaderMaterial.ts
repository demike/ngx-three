/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { RawShaderMaterial, ShaderMaterialParameters } from 'three';
import { ThMaterial } from './ThMaterial';
import { ThShaderMaterial } from './ThShaderMaterial';

@Component({
  selector: 'th-rawShaderMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThRawShaderMaterial) },
  ],
})
export class ThRawShaderMaterial<
  T extends RawShaderMaterial = RawShaderMaterial,
  TARGS extends any[] = [parameters?: ShaderMaterialParameters]
> extends ThShaderMaterial<T, TARGS> {
  protected getType(): Type<RawShaderMaterial> {
    return RawShaderMaterial;
  }
}
