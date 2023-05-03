/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { BufferGeometry, EdgesGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-edgesGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThEdgesGeometry)
    }
  ]
})
export class ThEdgesGeometry<
  TBufferGeometry extends BufferGeometry = BufferGeometry,
  T extends EdgesGeometry<TBufferGeometry> = EdgesGeometry<TBufferGeometry>,
  TARGS = [geometry?: TBufferGeometry | null, thresholdAngle?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<EdgesGeometry<TBufferGeometry>> {
    return EdgesGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'EdgesGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly geometry: TBufferGeometry | null;
        readonly thresholdAngle: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
