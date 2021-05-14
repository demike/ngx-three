/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { ShaderMaterial } from 'three';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-glitchPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThGlitchPass) }]
})
export class ThGlitchPass<T extends GlitchPass = GlitchPass, TARGS extends any[] = [dt_size?: number]> extends ThPass<T, TARGS> {
  public getType(): Type<GlitchPass> {
    return GlitchPass;
  }

  @Input()
  public set uniforms(value: object) {
    if (this._objRef) {
      this._objRef.uniforms = value;
    }
  }

  @Input()
  public set material(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  @Input()
  public set goWild(value: boolean) {
    if (this._objRef) {
      this._objRef.goWild = value;
    }
  }

  @Input()
  public set curF(value: number) {
    if (this._objRef) {
      this._objRef.curF = value;
    }
  }

  @Input()
  public set randX(value: number) {
    if (this._objRef) {
      this._objRef.randX = value;
    }
  }
}
