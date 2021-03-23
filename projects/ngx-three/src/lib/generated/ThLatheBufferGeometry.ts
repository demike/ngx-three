/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { LatheBufferGeometry, Vector2 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-latheBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThLatheBufferGeometry)
    }
  ]
})
export class ThLatheBufferGeometry<
  TARGS extends any[] = [points: Vector2[], segments?: number, phiStart?: number, phiLength?: number]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public objRef!: LatheBufferGeometry;
  protected getType(): Type<LatheBufferGeometry> {
    return LatheBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { points: Vector2[]; segments: number; phiStart: number; phiLength: number }) {
    if (this.objRef) {
      this.objRef.parameters = value;
    }
  }
}
