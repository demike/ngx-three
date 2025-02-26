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
  Line2NodeMaterial,
  Line2NodeMaterialParameters,
} from 'three/webgpu';
import { applyValue } from '../util';
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

  @Input()
  public set lights(value: boolean) {
    if (this._objRef) {
      this._objRef.lights = value;
    }
  }

  public get lights(): boolean | undefined {
    return this._objRef?.lights;
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
  public get isLineBasicMaterial(): true | undefined {
    return this._objRef?.isLineBasicMaterial;
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
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set linewidth(value: number) {
    if (this._objRef) {
      this._objRef.linewidth = value;
    }
  }

  public get linewidth(): number | undefined {
    return this._objRef?.linewidth;
  }
  @Input()
  public set linecap(value: string) {
    if (this._objRef) {
      this._objRef.linecap = value;
    }
  }

  public get linecap(): string | undefined {
    return this._objRef?.linecap;
  }
  @Input()
  public set linejoin(value: string) {
    if (this._objRef) {
      this._objRef.linejoin = value;
    }
  }

  public get linejoin(): string | undefined {
    return this._objRef?.linejoin;
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
  public set useAlphaToCoverage(value: boolean) {
    if (this._objRef) {
      this._objRef.useAlphaToCoverage = value;
    }
  }

  public get useAlphaToCoverage(): boolean | undefined {
    return this._objRef?.useAlphaToCoverage;
  }
  @Input()
  public set useColor(value: boolean) {
    if (this._objRef) {
      this._objRef.useColor = value;
    }
  }

  public get useColor(): boolean | undefined {
    return this._objRef?.useColor;
  }
  @Input()
  public set useDash(value: boolean) {
    if (this._objRef) {
      this._objRef.useDash = value;
    }
  }

  public get useDash(): boolean | undefined {
    return this._objRef?.useDash;
  }
  @Input()
  public set useWorldUnits(value: boolean) {
    if (this._objRef) {
      this._objRef.useWorldUnits = value;
    }
  }

  public get useWorldUnits(): boolean | undefined {
    return this._objRef?.useWorldUnits;
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
  public set lineWidth(value: number) {
    if (this._objRef) {
      this._objRef.lineWidth = value;
    }
  }

  public get lineWidth(): number | undefined {
    return this._objRef?.lineWidth;
  }
  @Input()
  public set lineColorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.lineColorNode = value;
    }
  }

  public get lineColorNode(): (Node | null) | undefined {
    return this._objRef?.lineColorNode;
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
  public get worldUnits(): boolean | undefined {
    return this._objRef?.worldUnits;
  }
  @Input()
  public set worldUnits(value: boolean) {
    if (this._objRef) {
      this._objRef.worldUnits = value;
    }
  }

  public get dashed(): boolean | undefined {
    return this._objRef?.dashed;
  }
  @Input()
  public set dashed(value: boolean) {
    if (this._objRef) {
      this._objRef.dashed = value;
    }
  }
}
