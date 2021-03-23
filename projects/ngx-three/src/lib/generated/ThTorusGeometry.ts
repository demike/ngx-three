/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { TorusGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-torusGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThTorusGeometry) }]
})
export class ThTorusGeometry<
  TARGS extends any[] = [radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number]
> extends ThGeometry<TARGS> {
  @Input()
  public objRef!: TorusGeometry;
  protected getType(): Type<TorusGeometry> {
    return TorusGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { radius: number; tube: number; radialSegments: number; tubularSegments: number; arc: number }) {
    if (this.objRef) {
      this.objRef.parameters = value;
    }
  }
}
