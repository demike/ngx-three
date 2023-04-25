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
import {
  Color,
  ColorRepresentation,
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

  @Input()
  public set type(value: 'Scene') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): 'Scene' | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set fog(value: FogBase | null) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  // @ts-ignore
  public get fog(): (FogBase | null) | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set backgroundBlurriness(value: number) {
    if (this._objRef) {
      this._objRef.backgroundBlurriness = value;
    }
  }

  // @ts-ignore
  public get backgroundBlurriness(): number | undefined {
    return this._objRef?.backgroundBlurriness;
  }
  @Input()
  public set backgroundIntensity(value: number) {
    if (this._objRef) {
      this._objRef.backgroundIntensity = value;
    }
  }

  // @ts-ignore
  public get backgroundIntensity(): number | undefined {
    return this._objRef?.backgroundIntensity;
  }
  @Input()
  public set overrideMaterial(value: Material | null) {
    if (this._objRef) {
      this._objRef.overrideMaterial = value;
    }
  }

  // @ts-ignore
  public get overrideMaterial(): (Material | null) | undefined {
    return this._objRef?.overrideMaterial;
  }
  @Input()
  public set background(
    value: null | Color | Texture | [color: ColorRepresentation]
  ) {
    if (this._objRef) {
      this._objRef.background = applyValue<null | Color | Texture>(
        this._objRef.background,
        value
      );
    }
  }
  // @ts-ignore
  public get background(): (null | Color | Texture) | undefined {
    return this._objRef?.background;
  }
  @Input()
  public set environment(value: null | Texture) {
    if (this._objRef) {
      this._objRef.environment = value;
    }
  }

  // @ts-ignore
  public get environment(): (null | Texture) | undefined {
    return this._objRef?.environment;
  }
  // @ts-ignore
  public get isScene(): true | undefined {
    return this._objRef?.isScene;
  }
}
