/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { TetrahedronGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-tetrahedronGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThTetrahedronGeometry),
    },
  ],
})
export class ThTetrahedronGeometry<
  T extends TetrahedronGeometry = TetrahedronGeometry,
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThGeometry<T, TARGS> {
  protected getType(): Type<TetrahedronGeometry> {
    return TetrahedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
