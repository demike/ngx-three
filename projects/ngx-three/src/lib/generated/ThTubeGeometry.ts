/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  BufferGeometryEventMap,
  NormalBufferAttributes,
  TubeGeometry,
} from 'three';
import { Curve } from 'three/src/extras/core/Curve.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-tubeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
    radialSegments?: number,
    closed?: boolean,
  ],
> extends ThBufferGeometry<
  NormalBufferAttributes,
  BufferGeometryEventMap,
  T,
  TARGS
> {
  public getType(): Type<TubeGeometry> {
    return TubeGeometry;
  }

  public get type(): (string | 'TubeGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly path: Curve<Vector3>;
        readonly tubularSegments: number;
        readonly radius: number;
        readonly radialSegments: number;
        readonly closed: boolean;
      }
    | undefined {
    return this._objRef?.parameters;
  }
  @Input()
  public set tangents(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.tangents = value;
    }
  }

  public get tangents(): Vector3[] | undefined {
    return this._objRef?.tangents;
  }
  @Input()
  public set normals(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.normals = value;
    }
  }

  public get normals(): Vector3[] | undefined {
    return this._objRef?.normals;
  }
  @Input()
  public set binormals(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.binormals = value;
    }
  }

  public get binormals(): Vector3[] | undefined {
    return this._objRef?.binormals;
  }
}
