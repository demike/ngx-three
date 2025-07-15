/* eslint-disable @typescript-eslint/ban-types */
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
import { ShaderMaterial } from 'three';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-glitchPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThGlitchPass) },
  ],
})
export class ThGlitchPass<
  T extends GlitchPass = GlitchPass,
  TARGS = /* dt_size? */ number,
> extends ThPass<T, TARGS> {
  public getType(): Type<GlitchPass> {
    return GlitchPass;
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
  @Input()
  public set goWild(value: boolean) {
    if (this._objRef) {
      this._objRef.goWild = value;
    }
  }

  public get goWild(): boolean | undefined {
    return this._objRef?.goWild;
  }
  @Input()
  public set curF(value: number) {
    if (this._objRef) {
      this._objRef.curF = value;
    }
  }

  public get curF(): number | undefined {
    return this._objRef?.curF;
  }
  @Input()
  public set randX(value: number) {
    if (this._objRef) {
      this._objRef.randX = value;
    }
  }

  public get randX(): number | undefined {
    return this._objRef?.randX;
  }
}
