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
  MeshNormalNodeMaterial,
  MeshNormalNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-meshNormalNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshNormalNodeMaterial),
    },
  ],
})
export class ThMeshNormalNodeMaterial<
  T extends MeshNormalNodeMaterial = MeshNormalNodeMaterial,
  TARGS = /* parameters? */ MeshNormalNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<MeshNormalNodeMaterial> {
    return MeshNormalNodeMaterial;
  }

  public get isMeshNormalNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshNormalNodeMaterial;
  }
}
