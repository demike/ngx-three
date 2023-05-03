/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, Color, ColorRepresentation, Material, Scene } from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-renderPassGen',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThRenderPassGen) }]
})
export class ThRenderPassGen<
  T extends RenderPass = RenderPass,
  TARGS = [scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number]
> extends ThPass<T, TARGS> {
  public getType(): Type<RenderPass> {
    return RenderPass;
  }

  @Input()
  public set scene(value: Scene) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  // @ts-ignore
  public get scene(): Scene | undefined {
    return this._objRef?.scene;
  }
  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  // @ts-ignore
  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set overrideMaterial(value: Material) {
    if (this._objRef) {
      this._objRef.overrideMaterial = value;
    }
  }

  // @ts-ignore
  public get overrideMaterial(): Material | undefined {
    return this._objRef?.overrideMaterial;
  }
  @Input()
  public set clearColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.clearColor = applyValue<Color>(this._objRef.clearColor, value);
    }
  }
  // @ts-ignore
  public get clearColor(): Color | undefined {
    return this._objRef?.clearColor;
  }
  @Input()
  public set clearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.clearAlpha = value;
    }
  }

  // @ts-ignore
  public get clearAlpha(): number | undefined {
    return this._objRef?.clearAlpha;
  }
  @Input()
  public set clearDepth(value: boolean) {
    if (this._objRef) {
      this._objRef.clearDepth = value;
    }
  }

  // @ts-ignore
  public get clearDepth(): boolean | undefined {
    return this._objRef?.clearDepth;
  }
}
