/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { DodecahedronGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-dodecahedronGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThDodecahedronGeometry),
    },
  ],
})
export class ThDodecahedronGeometry<
  T extends DodecahedronGeometry = DodecahedronGeometry,
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<DodecahedronGeometry> {
    return DodecahedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { radius: number; detail: number }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
