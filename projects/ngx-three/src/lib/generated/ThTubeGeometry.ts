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
import { Curve, TubeGeometry, Vector3 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-tubeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTubeGeometry),
    },
  ],
})
export class ThTubeGeometry<
  T extends TubeGeometry = TubeGeometry,
  TARGS = [
    path?: Curve<Vector3>,
    tubularSegments?: number,
    radius?: number,
    radiusSegments?: number,
    closed?: boolean
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<TubeGeometry> {
    return TubeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    path: Curve<Vector3>;
    tubularSegments: number;
    radius: number;
    radialSegments: number;
    closed: boolean;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }

  @Input()
  public set tangents(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.tangents = value;
    }
  }

  @Input()
  public set normals(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.normals = value;
    }
  }

  @Input()
  public set binormals(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.binormals = value;
    }
  }
}
