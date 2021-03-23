/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Curve, TubeGeometry, Vector3 } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-tubeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThTubeGeometry) }]
})
export class ThTubeGeometry<
  TARGS extends any[] = [path: Curve<Vector3>, tubularSegments?: number, radius?: number, radiusSegments?: number, closed?: boolean]
> extends ThGeometry<TARGS> {
  @Input()
  public objRef!: TubeGeometry;
  protected getType(): Type<TubeGeometry> {
    return TubeGeometry;
  }

  @Input()
  public set parameters(value: { path: Curve<Vector3>; tubularSegments: number; radius: number; radialSegments: number; closed: boolean }) {
    if (this.objRef) {
      this.objRef.parameters = value;
    }
  }

  @Input()
  public set tangents(value: Vector3[]) {
    if (this.objRef) {
      this.objRef.tangents = value;
    }
  }

  @Input()
  public set normals(value: Vector3[]) {
    if (this.objRef) {
      this.objRef.normals = value;
    }
  }

  @Input()
  public set binormals(value: Vector3[]) {
    if (this.objRef) {
      this.objRef.binormals = value;
    }
  }
}
