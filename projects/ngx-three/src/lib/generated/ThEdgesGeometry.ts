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
  T extends EdgesGeometry = EdgesGeometry,
  TARGS extends any[] = [geometry: BufferGeometry, thresholdAngle?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<EdgesGeometry> {
    return EdgesGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: { thresholdAngle: number }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }
}
