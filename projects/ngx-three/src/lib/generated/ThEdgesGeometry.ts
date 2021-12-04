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
import { BufferGeometry, EdgesGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-edgesGeometry',
  template: '',
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
  TARGS = [geometry?: TBufferGeometry, thresholdAngle?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<EdgesGeometry<TBufferGeometry>> {
    return EdgesGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    geometry: TBufferGeometry;
    thresholdAngle: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
