/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BoxGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-boxGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThBoxGeometry) }]
})
export class ThBoxGeometry<
  TARGS extends any[] = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ]
> extends ThGeometry<TARGS> {
  @Input()
  public objRef!: BoxGeometry;
  protected getType(): Type<BoxGeometry> {
    return BoxGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    width: number;
    height: number;
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
  }) {
    if (this.objRef) {
      this.objRef.parameters = value;
    }
  }
}
