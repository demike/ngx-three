/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { LatheGeometry, Vector2 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-latheGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThLatheGeometry)
    }
  ]
})
export class ThLatheGeometry<
  T extends LatheGeometry = LatheGeometry,
  TARGS extends any[] = [points: Vector2[], segments?: number, phiStart?: number, phiLength?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<LatheGeometry> {
    return LatheGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { points: Vector2[]; segments: number; phiStart: number; phiLength: number }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
