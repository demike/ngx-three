// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Curve, TubeGeometry, Vector3 } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-tubeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThTubeGeometry) },
  ],
})
export class ThTubeGeometry<
  TARGS extends any[] = [
    path: Curve<Vector3>,
    tubularSegments?: number,
    radius?: number,
    radiusSegments?: number,
    closed?: boolean
  ]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: TubeGeometry;
  protected getType(): Type<TubeGeometry> {
    return TubeGeometry;
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
