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
import { ShaderMaterial, Vector2 } from 'three';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-dotScreenPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThDotScreenPass) },
  ],
})
export class ThDotScreenPass<
  T extends DotScreenPass = DotScreenPass,
  TARGS = [center?: Vector2, angle?: number, scale?: number],
> extends ThPass<T, TARGS> {
  public getType(): Type<DotScreenPass> {
    return DotScreenPass;
  }

  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  public get uniforms(): { [name: string]: { value: any } } | undefined {
    return this._objRef?.uniforms as
      | { [name: string]: { value: any } }
      | undefined;
  }
  @Input()
  public set material(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  public get material(): ShaderMaterial | undefined {
    return this._objRef?.material;
  }
  @Input()
  public set fsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  public get fsQuad(): FullScreenQuad | undefined {
    return this._objRef?.fsQuad;
  }
}
