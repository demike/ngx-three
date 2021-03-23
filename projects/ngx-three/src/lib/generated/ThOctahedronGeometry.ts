/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { OctahedronGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-octahedronGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThOctahedronGeometry)
    }
  ]
})
export class ThOctahedronGeometry<TARGS extends any[] = [radius?: number, detail?: number]> extends ThGeometry<TARGS> {
  @Input()
  public objRef!: OctahedronGeometry;
  protected getType(): Type<OctahedronGeometry> {
    return OctahedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }
}
