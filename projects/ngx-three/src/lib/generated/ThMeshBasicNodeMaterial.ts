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
  MeshBasicNodeMaterial,
  MeshBasicNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-meshBasicNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshBasicNodeMaterial),
    },
  ],
})
export class ThMeshBasicNodeMaterial<
  T extends MeshBasicNodeMaterial = MeshBasicNodeMaterial,
  TARGS = /* parameters? */ MeshBasicNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<MeshBasicNodeMaterial> {
    return MeshBasicNodeMaterial;
  }

  public get isMeshBasicNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshBasicNodeMaterial;
  }
}
