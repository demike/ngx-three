/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, SkipSelf, Type } from '@angular/core';
import { Box3, BufferAttribute, BufferGeometry, InterleavedBufferAttribute, Sphere, Vector3 } from 'three';
import { ThGeometryBase } from '../ThGeometryBase';
import { applyValue } from '../util';
import { ThGeometry } from './ThGeometry';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-bufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThBufferGeometry) }]
})
export class ThBufferGeometry<TARGS extends any[] = []> extends ThGeometryBase<TARGS> {
  @Input()
  public objRef!: BufferGeometry;
  protected getType(): Type<BufferGeometry> {
    return BufferGeometry;
  }

  @Input()
  public set id(value: number) {
    if (this.objRef) {
      this.objRef.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.objRef) {
      this.objRef.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.objRef) {
      this.objRef.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set index(value: BufferAttribute | null | [value: ArrayLike<number> | ArrayBufferView, offset?: number]) {
    if (this.objRef) {
      this.objRef.index = applyValue<BufferAttribute | null>(this.objRef.index, value);
    }
  }
  @Input()
  public set attributes(value: { [name: string]: BufferAttribute | InterleavedBufferAttribute }) {
    if (this.objRef) {
      this.objRef.attributes = value;
    }
  }

  @Input()
  public set morphAttributes(value: { [name: string]: (BufferAttribute | InterleavedBufferAttribute)[] }) {
    if (this.objRef) {
      this.objRef.morphAttributes = value;
    }
  }

  @Input()
  public set morphTargetsRelative(value: boolean) {
    if (this.objRef) {
      this.objRef.morphTargetsRelative = value;
    }
  }

  @Input()
  public set groups(value: { start: number; count: number; materialIndex?: number }[]) {
    if (this.objRef) {
      this.objRef.groups = value;
    }
  }

  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this.objRef) {
      this.objRef.boundingBox = applyValue<Box3 | null>(this.objRef.boundingBox, value);
    }
  }
  @Input()
  public set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]) {
    if (this.objRef) {
      this.objRef.boundingSphere = applyValue<Sphere | null>(this.objRef.boundingSphere, value);
    }
  }
  @Input()
  public set drawRange(value: { start: number; count: number }) {
    if (this.objRef) {
      this.objRef.drawRange = value;
    }
  }

  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this.objRef) {
      this.objRef.userData = value;
    }
  }

  @Input()
  public set drawcalls(value: any) {
    if (this.objRef) {
      this.objRef.drawcalls = value;
    }
  }

  @Input()
  public set offsets(value: any) {
    if (this.objRef) {
      this.objRef.offsets = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
