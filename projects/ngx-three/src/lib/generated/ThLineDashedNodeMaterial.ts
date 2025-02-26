/* eslint-disable @typescript-eslint/ban-types */
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
import { LineDashedMaterialParameters } from 'three/src/materials/LineDashedMaterial.js';
import Node from 'three/src/nodes/core/Node.js';
import { LineDashedNodeMaterial } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-lineDashedNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThLineDashedNodeMaterial),
    },
  ],
})
export class ThLineDashedNodeMaterial<
  T extends LineDashedNodeMaterial = LineDashedNodeMaterial,
  TARGS = /* parameters? */ LineDashedMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<LineDashedNodeMaterial> {
    return LineDashedNodeMaterial;
  }

  public get isLineDashedNodeMaterial(): true | undefined {
    return this._objRef?.isLineDashedNodeMaterial;
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
  public get isLineDashedMaterial(): true | undefined {
    return this._objRef?.isLineDashedMaterial;
  }
  @Input()
  public set scale(value: number) {
    if (this._objRef) {
      this._objRef.scale = value;
    }
  }

  public get scale(): number | undefined {
    return this._objRef?.scale;
  }
  @Input()
  public set dashSize(value: number) {
    if (this._objRef) {
      this._objRef.dashSize = value;
    }
  }

  public get dashSize(): number | undefined {
    return this._objRef?.dashSize;
  }
  @Input()
  public set gapSize(value: number) {
    if (this._objRef) {
      this._objRef.gapSize = value;
    }
  }

  public get gapSize(): number | undefined {
    return this._objRef?.gapSize;
  }
}
