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
  template: '',
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

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
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

  // @ts-ignore
  public get parameters():
    | {
        path: Curve<Vector3>;
        tubularSegments: number;
        radius: number;
        radialSegments: number;
        closed: boolean;
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

  // @ts-ignore
  public get tangents(): Vector3[] | undefined {
    return this._objRef?.tangents;
  }
  @Input()
  public set normals(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.normals = value;
    }
  }

  // @ts-ignore
  public get normals(): Vector3[] | undefined {
    return this._objRef?.normals;
  }
  @Input()
  public set binormals(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.binormals = value;
    }
  }

  // @ts-ignore
  public get binormals(): Vector3[] | undefined {
    return this._objRef?.binormals;
  }
}
