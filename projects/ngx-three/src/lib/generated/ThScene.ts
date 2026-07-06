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
import { Euler, EulerOrder } from 'three';
import { Object3DEventMap } from 'three/src/core/Object3D.js';
import { Material } from 'three/src/materials/Material.js';
import { Color } from 'three/src/math/Color.js';
import Node from 'three/src/nodes/core/Node.js';
import { Fog } from 'three/src/scenes/Fog.js';
import { FogExp2 } from 'three/src/scenes/FogExp2.js';
import { Scene } from 'three/src/scenes/Scene.js';
import { Texture } from 'three/src/textures/Texture.js';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-scene',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }],
})
export class ThScene<
  TEventMap extends Object3DEventMap = Object3DEventMap,
  T extends Scene<TEventMap> = Scene<TEventMap>,
  TARGS = [],
> extends ThObject3D<TEventMap, T, TARGS> {
  public getType(): Type<Scene<TEventMap>> {
    return Scene;
  }

  public get isScene(): boolean | undefined {
    return this._objRef?.isScene;
  }
  @Input()
  public set background(value: (Color | Texture) | null) {
    if (this._objRef) {
      this._objRef.background = value;
    }
  }

  public get background(): ((Color | Texture) | null) | undefined {
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
  @Input()
  public set fog(value: (Fog | FogExp2) | null) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): ((Fog | FogExp2) | null) | undefined {
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
  public set backgroundRotation(
    value: Euler | [x: number, y: number, z: number, order?: EulerOrder],
  ) {
    if (this._objRef) {
      this._objRef.backgroundRotation = applyValue<Euler>(
        this._objRef.backgroundRotation,
        value,
      );
    }
  }
  public get backgroundRotation(): Euler | undefined {
    return this._objRef?.backgroundRotation;
  }
  @Input()
  public set environmentIntensity(value: number) {
    if (this._objRef) {
      this._objRef.environmentIntensity = value;
    }
  }

  public get environmentIntensity(): number | undefined {
    return this._objRef?.environmentIntensity;
  }
  @Input()
  public set environmentRotation(
    value: Euler | [x: number, y: number, z: number, order?: EulerOrder],
  ) {
    if (this._objRef) {
      this._objRef.environmentRotation = applyValue<Euler>(
        this._objRef.environmentRotation,
        value,
      );
    }
  }
  public get environmentRotation(): Euler | undefined {
    return this._objRef?.environmentRotation;
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
  public set environmentNode(value: Node<'vec3'> | null | undefined) {
    if (this._objRef) {
      this._objRef.environmentNode = value;
    }
  }

  public get environmentNode(): (Node<'vec3'> | null | undefined) | undefined {
    return this._objRef?.environmentNode;
  }
  @Input()
  public set backgroundNode(value: Node | null | undefined) {
    if (this._objRef) {
      this._objRef.backgroundNode = value;
    }
  }

  public get backgroundNode(): (Node | null | undefined) | undefined {
    return this._objRef?.backgroundNode;
  }
  @Input()
  public set fogNode(value: Node | null | undefined) {
    if (this._objRef) {
      this._objRef.fogNode = value;
    }
  }

  public get fogNode(): (Node | null | undefined) | undefined {
    return this._objRef?.fogNode;
  }
}
