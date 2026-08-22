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
  MeshMatcapNodeMaterial,
  MeshMatcapNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-meshMatcapNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshMatcapNodeMaterial),
    },
  ],
})
export class ThMeshMatcapNodeMaterial<
  T extends MeshMatcapNodeMaterial = MeshMatcapNodeMaterial,
  TARGS = /* parameters? */ MeshMatcapNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<MeshMatcapNodeMaterial> {
    return MeshMatcapNodeMaterial;
  }

  public get isMeshMatcapNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshMatcapNodeMaterial;
  }
}
