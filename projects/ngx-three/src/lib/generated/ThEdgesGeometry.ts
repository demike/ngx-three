/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { EdgesGeometry, NormalBufferAttributes } from 'three';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-edgesGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThEdgesGeometry),
    },
  ],
})
export class ThEdgesGeometry<
  TBufferGeometry extends BufferGeometry = BufferGeometry,
  T extends EdgesGeometry<TBufferGeometry> = EdgesGeometry<TBufferGeometry>,
  TARGS = [geometry?: TBufferGeometry | null, thresholdAngle?: number],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<EdgesGeometry<TBufferGeometry>> {
    return EdgesGeometry;
  }

  public get type(): (string | 'EdgesGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly geometry: TBufferGeometry | null;
        readonly thresholdAngle: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
