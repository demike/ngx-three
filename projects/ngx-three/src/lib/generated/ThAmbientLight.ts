/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { AmbientLight, Color } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-ambientLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLight) },
  ],
})
export class ThAmbientLight<
  T extends AmbientLight = AmbientLight,
  TARGS extends any[] = [color?: Color | string | number, intensity?: number]
> extends ThLight<T, TARGS> {
  protected getType(): Type<AmbientLight> {
    return AmbientLight;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
