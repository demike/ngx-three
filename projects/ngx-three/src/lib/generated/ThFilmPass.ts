/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ShaderMaterial } from 'three';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-filmPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThFilmPass) },
  ],
})
export class ThFilmPass<
  T extends FilmPass = FilmPass,
  TARGS extends any[] = [
    noiseIntensity?: number,
    scanlinesIntensity?: number,
    scanlinesCount?: number,
    grayscale?: number
  ]
> extends ThPass<T, TARGS> {
  protected getType(): Type<FilmPass> {
    return FilmPass;
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
}
