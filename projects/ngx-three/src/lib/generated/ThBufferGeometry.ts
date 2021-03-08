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
  public obj!: BufferGeometry;
  protected getType(): Type<BufferGeometry> {
    return BufferGeometry;
  }

  @Input()
  public set id(value: number) {
    if (this.obj) {
      this.obj.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.obj) {
      this.obj.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.obj) {
      this.obj.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set index(value: BufferAttribute | null | [value: ArrayLike<number> | ArrayBufferView, offset?: number]) {
    if (this.obj) {
      this.obj.index = applyValue<BufferAttribute | null>(this.obj.index, value);
    }
  }
  @Input()
  public set attributes(value: { [name: string]: BufferAttribute | InterleavedBufferAttribute }) {
    if (this.obj) {
      this.obj.attributes = value;
    }
  }

  @Input()
  public set morphAttributes(value: { [name: string]: (BufferAttribute | InterleavedBufferAttribute)[] }) {
    if (this.obj) {
      this.obj.morphAttributes = value;
    }
  }

  @Input()
  public set morphTargetsRelative(value: boolean) {
    if (this.obj) {
      this.obj.morphTargetsRelative = value;
    }
  }

  @Input()
  public set groups(value: { start: number; count: number; materialIndex?: number }[]) {
    if (this.obj) {
      this.obj.groups = value;
    }
  }

  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this.obj) {
      this.obj.boundingBox = applyValue<Box3 | null>(this.obj.boundingBox, value);
    }
  }
  @Input()
  public set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]) {
    if (this.obj) {
      this.obj.boundingSphere = applyValue<Sphere | null>(this.obj.boundingSphere, value);
    }
  }
  @Input()
  public set drawRange(value: { start: number; count: number }) {
    if (this.obj) {
      this.obj.drawRange = value;
    }
  }

  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this.obj) {
      this.obj.userData = value;
    }
  }

  @Input()
  public set drawcalls(value: any) {
    if (this.obj) {
      this.obj.drawcalls = value;
    }
  }

  @Input()
  public set offsets(value: any) {
    if (this.obj) {
      this.obj.offsets = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
