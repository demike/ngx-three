// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Curve, TubeBufferGeometry, Vector3 } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-tubeBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThTubeBufferGeometry),
    },
  ],
})
export class ThTubeBufferGeometry<
  TARGS extends any[] = [
    path: Curve<Vector3>,
    tubularSegments?: number,
    radius?: number,
    radiusSegments?: number,
    closed?: boolean
  ]
> extends ThBufferGeometry<TARGS> {
  public obj!: TubeBufferGeometry;
  protected getType(): Type<TubeBufferGeometry> {
    return TubeBufferGeometry;
  }

  @Input()
  public set parameters(value: {
    path: Curve<Vector3>;
    tubularSegments: number;
    radius: number;
    radialSegments: number;
    closed: boolean;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }

  @Input()
  public set tangents(value: Vector3[]) {
    if (this.obj) {
      this.obj.tangents = value;
    }
  }

  @Input()
  public set normals(value: Vector3[]) {
    if (this.obj) {
      this.obj.normals = value;
    }
  }

  @Input()
  public set binormals(value: Vector3[]) {
    if (this.obj) {
      this.obj.binormals = value;
    }
  }
}
