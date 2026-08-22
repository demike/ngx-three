/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import {
  LineBasicNodeMaterial,
  LineBasicNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-lineBasicNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThLineBasicNodeMaterial),
    },
  ],
})
export class ThLineBasicNodeMaterial<
  T extends LineBasicNodeMaterial = LineBasicNodeMaterial,
  TARGS = /* parameters? */ LineBasicNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<LineBasicNodeMaterial> {
    return LineBasicNodeMaterial;
  }

  public get isLineBasicNodeMaterial(): boolean | undefined {
    return this._objRef?.isLineBasicNodeMaterial;
  }
}
