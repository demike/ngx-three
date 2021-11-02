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
import { ShaderMaterial, Vector2 } from 'three';
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-dotScreenPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThDotScreenPass) },
  ],
})
export class ThDotScreenPass<
  T extends DotScreenPass = DotScreenPass,
  TARGS extends any[] = [center?: Vector2, angle?: number, scale?: number]
> extends ThPass<T, TARGS> {
  public getType(): Type<DotScreenPass> {
    return DotScreenPass;
  }

  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      // this._objRef.uniforms = UniformsUtils.merge([this._objRef.uniforms, map])
      Object.assign(this._objRef.uniforms, map);
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
}
