/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera, Color, ColorRepresentation, Material, Scene } from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-renderPassGen',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThRenderPassGen) },
  ],
})
export class ThRenderPassGen<
  T extends RenderPass = RenderPass,
  TARGS = [
    scene: Scene,
    camera: Camera,
    overrideMaterial?: Material,
    clearColor?: Color,
    clearAlpha?: number
  ]
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

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set overrideMaterial(value: Material) {
    if (this._objRef) {
      this._objRef.overrideMaterial = value;
    }
  }

  @Input()
  public set clearColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.clearColor = applyValue<Color>(
        this._objRef.clearColor,
        value
      );
    }
  }
  @Input()
  public set clearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.clearAlpha = value;
    }
  }

  @Input()
  public set clearDepth(value: boolean) {
    if (this._objRef) {
      this._objRef.clearDepth = value;
    }
  }
}
