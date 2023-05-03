/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { BufferGeometry, WireframeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-wireframeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThWireframeGeometry)
    }
  ]
})
export class ThWireframeGeometry<
  TBufferGeometry extends BufferGeometry = BufferGeometry,
  T extends WireframeGeometry<TBufferGeometry> = WireframeGeometry<TBufferGeometry>,
  TARGS = /* geometry? */ TBufferGeometry
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<WireframeGeometry<TBufferGeometry>> {
    return WireframeGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'WireframeGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly geometry: TBufferGeometry;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
