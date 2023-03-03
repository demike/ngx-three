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
import { PlaneGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-planeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThPlaneGeometry),
    },
  ],
})
export class ThPlaneGeometry<
  T extends PlaneGeometry = PlaneGeometry,
  TARGS = [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<PlaneGeometry> {
    return PlaneGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set parameters(value: {
    width: number;
    height: number;
    widthSegments: number;
    heightSegments: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }

  // @ts-ignore
  public get parameters():
    | {
        width: number;
        height: number;
        widthSegments: number;
        heightSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
