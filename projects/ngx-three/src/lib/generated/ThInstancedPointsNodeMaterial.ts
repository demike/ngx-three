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
import Node from 'three/src/nodes/core/Node.js';
import { Texture } from 'three/src/textures/Texture.js';
import {
  Color,
  ColorRepresentation,
  InstancedPointsNodeMaterial,
  InstancedPointsNodeMaterialParameters,
} from 'three/webgpu';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-instancedPointsNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThInstancedPointsNodeMaterial),
    },
  ],
})
export class ThInstancedPointsNodeMaterial<
  T extends InstancedPointsNodeMaterial = InstancedPointsNodeMaterial,
  TARGS = /* params? */ InstancedPointsNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<InstancedPointsNodeMaterial> {
    return InstancedPointsNodeMaterial;
  }

  @Input()
  public set useAlphaToCoverage(value: boolean) {
    if (this._objRef) {
      this._objRef.useAlphaToCoverage = value;
    }
  }

  public get useAlphaToCoverage(): boolean | undefined {
    return this._objRef?.useAlphaToCoverage;
  }
  @Input()
  public set useColor(value: boolean | undefined) {
    if (this._objRef) {
      this._objRef.useColor = value;
    }
  }

  public get useColor(): (boolean | undefined) | undefined {
    return this._objRef?.useColor;
  }
  @Input()
  public set pointWidth(value: number) {
    if (this._objRef) {
      this._objRef.pointWidth = value;
    }
  }

  public get pointWidth(): number | undefined {
    return this._objRef?.pointWidth;
  }
  @Input()
  public set pointColorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.pointColorNode = value;
    }
  }

  public get pointColorNode(): (Node | null) | undefined {
    return this._objRef?.pointColorNode;
  }
  @Input()
  public set pointWidthNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.pointWidthNode = value;
    }
  }

  public get pointWidthNode(): (Node | null) | undefined {
    return this._objRef?.pointWidthNode;
  }
  public get isPointsMaterial(): true | undefined {
    return this._objRef?.isPointsMaterial;
  }
  @Input()
  public set color(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  public get size(): number | undefined {
    return this._objRef?.size;
  }
  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this._objRef) {
      this._objRef.sizeAttenuation = value;
    }
  }

  public get sizeAttenuation(): boolean | undefined {
    return this._objRef?.sizeAttenuation;
  }
}
