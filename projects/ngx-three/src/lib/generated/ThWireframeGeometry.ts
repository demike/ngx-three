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
import {
  BufferGeometryEventMap,
  NormalBufferAttributes,
  WireframeGeometry,
} from 'three';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-wireframeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThWireframeGeometry),
    },
  ],
})
export class ThWireframeGeometry<
  TBufferGeometry extends BufferGeometry = BufferGeometry,
  T extends
    WireframeGeometry<TBufferGeometry> = WireframeGeometry<TBufferGeometry>,
  TARGS = /* geometry? */ TBufferGeometry,
> extends ThBufferGeometry<
  NormalBufferAttributes,
  BufferGeometryEventMap,
  T,
  TARGS
> {
  public getType(): Type<WireframeGeometry<TBufferGeometry>> {
    return WireframeGeometry;
  }

  public get type(): (string | 'WireframeGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly geometry: TBufferGeometry;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
