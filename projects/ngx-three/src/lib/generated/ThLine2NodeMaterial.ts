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
import { Line2NodeMaterial, Line2NodeMaterialParameters } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-line2NodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThLine2NodeMaterial) },
  ],
})
export class ThLine2NodeMaterial<
  T extends Line2NodeMaterial = Line2NodeMaterial,
  TARGS = /* parameters? */ Line2NodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<Line2NodeMaterial> {
    return Line2NodeMaterial;
  }

  public get isLine2NodeMaterial(): boolean | undefined {
    return this._objRef?.isLine2NodeMaterial;
  }
  @Input()
  public set dashOffset(value: number) {
    if (this._objRef) {
      this._objRef.dashOffset = value;
    }
  }

  public get dashOffset(): number | undefined {
    return this._objRef?.dashOffset;
  }
  @Input()
  public set offsetNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.offsetNode = value;
    }
  }

  public get offsetNode(): (Node | null) | undefined {
    return this._objRef?.offsetNode;
  }
  @Input()
  public set dashScaleNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.dashScaleNode = value;
    }
  }

  public get dashScaleNode(): (Node | null) | undefined {
    return this._objRef?.dashScaleNode;
  }
  @Input()
  public set dashSizeNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.dashSizeNode = value;
    }
  }

  public get dashSizeNode(): (Node | null) | undefined {
    return this._objRef?.dashSizeNode;
  }
  @Input()
  public set gapSizeNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.gapSizeNode = value;
    }
  }

  public get gapSizeNode(): (Node | null) | undefined {
    return this._objRef?.gapSizeNode;
  }
  @Input()
  public set lineColorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.lineColorNode = value;
    }
  }

  @Input()
  public set worldUnits(value: boolean) {
    if (this._objRef) {
      this._objRef.worldUnits = value;
    }
  }

  @Input()
  public set dashed(value: boolean) {
    if (this._objRef) {
      this._objRef.dashed = value;
    }
  }
}
