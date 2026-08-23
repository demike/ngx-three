/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { ShadowNodeMaterial, ShadowNodeMaterialParameters } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-shadowNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThShadowNodeMaterial),
    },
  ],
})
export class ThShadowNodeMaterial<
  T extends ShadowNodeMaterial = ShadowNodeMaterial,
  TARGS = /* parameters? */ ShadowNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<ShadowNodeMaterial> {
    return ShadowNodeMaterial;
  }

  public get isShadowNodeMaterial(): boolean | undefined {
    return this._objRef?.isShadowNodeMaterial;
  }
}
