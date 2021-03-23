/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { TorusKnotBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-torusKnotBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThTorusKnotBufferGeometry)
    }
  ]
})
export class ThTorusKnotBufferGeometry<
  TARGS extends any[] = [radius?: number, tube?: number, tubularSegments?: number, radialSegments?: number, p?: number, q?: number]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public objRef!: TorusKnotBufferGeometry;
  protected getType(): Type<TorusKnotBufferGeometry> {
    return TorusKnotBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { radius: number; tube: number; tubularSegments: number; radialSegments: number; p: number; q: number }) {
    if (this.objRef) {
      this.objRef.parameters = value;
    }
  }
}
