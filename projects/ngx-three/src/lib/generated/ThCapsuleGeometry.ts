/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { CapsuleGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-capsuleGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThCapsuleGeometry),
    },
  ],
})
export class ThCapsuleGeometry<
  T extends CapsuleGeometry = CapsuleGeometry,
  TARGS = [
    radius?: number,
    length?: number,
    capSegments?: number,
    radialSegments?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<CapsuleGeometry> {
    return CapsuleGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    radius: number;
    length: number;
    capSegments: number;
    radialSegments: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
