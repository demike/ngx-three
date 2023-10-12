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
import {
  Color,
  ColorRepresentation,
  CubeTexture,
  Event,
  FogBase,
  Material,
  Scene,
  Texture,
} from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-scene',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }],
})
export class ThScene<T extends Scene = Scene, TARGS = []> extends ThObject3D<
  Event,
  T,
  TARGS
> {
  public getType(): Type<Scene> {
    return Scene;
  }

  public get isScene(): true | undefined {
    return this._objRef?.isScene;
  }
  @Input()
  public set type(value: 'Scene') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  public get type(): 'Scene' | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set fog(value: FogBase | null) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): (FogBase | null) | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set backgroundBlurriness(value: number) {
    if (this._objRef) {
      this._objRef.backgroundBlurriness = value;
    }
  }

  public get backgroundBlurriness(): number | undefined {
    return this._objRef?.backgroundBlurriness;
  }
  @Input()
  public set backgroundIntensity(value: number) {
    if (this._objRef) {
      this._objRef.backgroundIntensity = value;
    }
  }

  public get backgroundIntensity(): number | undefined {
    return this._objRef?.backgroundIntensity;
  }
  @Input()
  public set overrideMaterial(value: Material | null) {
    if (this._objRef) {
      this._objRef.overrideMaterial = value;
    }
  }

  public get overrideMaterial(): (Material | null) | undefined {
    return this._objRef?.overrideMaterial;
  }
  @Input()
  public set background(
    value: Color | Texture | CubeTexture | null | [color: ColorRepresentation],
  ) {
    if (this._objRef) {
      this._objRef.background = applyValue<
        Color | Texture | CubeTexture | null
      >(this._objRef.background, value);
    }
  }
  public get background(): (Color | Texture | CubeTexture | null) | undefined {
    return this._objRef?.background;
  }
  @Input()
  public set environment(value: Texture | null) {
    if (this._objRef) {
      this._objRef.environment = value;
    }
  }

  public get environment(): (Texture | null) | undefined {
    return this._objRef?.environment;
  }
}
