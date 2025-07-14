/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { RawShaderMaterial, ShaderMaterialParameters } from 'three';
import { ThMaterial } from './ThMaterial';
import { ThShaderMaterial } from './ThShaderMaterial';

@Component({
  selector: 'th-rawShaderMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThRawShaderMaterial) }],
})
export class ThRawShaderMaterial<
  T extends RawShaderMaterial = RawShaderMaterial,
  TARGS = /* parameters? */ ShaderMaterialParameters,
> extends ThShaderMaterial<T, TARGS> {
  public getType(): Type<RawShaderMaterial> {
    return RawShaderMaterial;
  }

  public get isRawShaderMaterial(): boolean | undefined {
    return this._objRef?.isRawShaderMaterial;
  }
}
