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
import { BoxGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-boxGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThBufferGeometry, useExisting: forwardRef(() => ThBoxGeometry) },
  ],
})
export class ThBoxGeometry<
  T extends BoxGeometry = BoxGeometry,
  TARGS = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<BoxGeometry> {
    return BoxGeometry;
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
    depth: number;
    widthSegments: number;
    heightSegments: number;
    depthSegments: number;
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
        depth: number;
        widthSegments: number;
        heightSegments: number;
        depthSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
