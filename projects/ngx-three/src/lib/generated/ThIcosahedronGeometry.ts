/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { IcosahedronGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-icosahedronGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThIcosahedronGeometry),
    },
  ],
})
export class ThIcosahedronGeometry<
  T extends IcosahedronGeometry = IcosahedronGeometry,
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<IcosahedronGeometry> {
    return IcosahedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
