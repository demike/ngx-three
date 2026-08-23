/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import Node from 'three/src/nodes/core/Node.js';
import { PointsNodeMaterial, PointsNodeMaterialParameters } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThSpriteNodeMaterial } from './ThSpriteNodeMaterial';

@Component({
  selector: 'th-pointsNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThPointsNodeMaterial),
    },
  ],
})
export class ThPointsNodeMaterial<
  T extends PointsNodeMaterial = PointsNodeMaterial,
  TARGS = /* parameters? */ PointsNodeMaterialParameters,
> extends ThSpriteNodeMaterial<T, TARGS> {
  public getType(): Type<PointsNodeMaterial> {
    return PointsNodeMaterial;
  }

  public get isPointsNodeMaterial(): boolean | undefined {
    return this._objRef?.isPointsNodeMaterial;
  }
  @Input()
  public set sizeNode(value: Node) {
    if (this._objRef) {
      this._objRef.sizeNode = value;
    }
  }

  public get sizeNode(): Node | undefined {
    return this._objRef?.sizeNode;
  }
}
