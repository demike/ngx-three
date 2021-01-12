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
  TARGS extends any[] = [parameters?: ShaderMaterialParameters]
> extends ThShaderMaterial<TARGS> {
  public obj!: RawShaderMaterial;
  protected getType(): Type<RawShaderMaterial> {
    return RawShaderMaterial;
  }
}
