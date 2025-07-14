/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, Type } from '@angular/core';
import {
  Box3,
  BufferAttribute,
  BufferGeometry,
  BufferGeometryEventMap,
  GeometryGroup,
  NormalBufferAttributes,
  NormalOrGLBufferAttributes,
} from 'three';
import { InterleavedBufferAttribute } from 'three/src/core/InterleavedBufferAttribute.js';
import { Sphere } from 'three/src/math/Sphere.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import IndirectStorageBufferAttribute from 'three/src/renderers/common/IndirectStorageBufferAttribute.js';
import { ThGeometryBase } from '../ThGeometryBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-bufferGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [],
})
export class ThBufferGeometry<
  Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
  TEventMap extends BufferGeometryEventMap = BufferGeometryEventMap,
  T extends BufferGeometry<Attributes, TEventMap> = BufferGeometry<Attributes, TEventMap>,
  TARGS = [],
> extends ThGeometryBase<T, TARGS> {
  public getType(): Type<BufferGeometry<Attributes, TEventMap>> {
    return BufferGeometry;
  }

  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  public get id(): number | undefined {
    return this._objRef?.id;
  }
  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  public get uuid(): string | undefined {
    return this._objRef?.uuid;
  }
  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  public get name(): string | undefined {
    return this._objRef?.name;
  }
  public get type(): (string | 'BufferGeometry') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set index(value: BufferAttribute | null | [value: ArrayLike<number> | ArrayBufferView, offset?: number]) {
    if (this._objRef) {
      this._objRef.index = applyValue<BufferAttribute | null>(this._objRef.index, value);
    }
  }
  public get index(): (BufferAttribute | null) | undefined {
    return this._objRef?.index;
  }
  @Input()
  public set indirect(
    value: IndirectStorageBufferAttribute | null | [value: ArrayLike<number> | ArrayBufferView, offset?: number],
  ) {
    if (this._objRef) {
      this._objRef.indirect = applyValue<IndirectStorageBufferAttribute | null>(this._objRef.indirect, value);
    }
  }
  public get indirect(): (IndirectStorageBufferAttribute | null) | undefined {
    return this._objRef?.indirect;
  }
  @Input()
  public set attributes(value: Attributes) {
    if (this._objRef) {
      this._objRef.attributes = value;
    }
  }

  public get attributes(): Attributes | undefined {
    return this._objRef?.attributes;
  }
  @Input()
  public set morphAttributes(value: {
    position?: Array<BufferAttribute | InterleavedBufferAttribute> | undefined;
    normal?: Array<BufferAttribute | InterleavedBufferAttribute> | undefined;
    color?: Array<BufferAttribute | InterleavedBufferAttribute> | undefined;
  }) {
    if (this._objRef) {
      this._objRef.morphAttributes = value;
    }
  }

  public get morphAttributes():
    | {
        position?: Array<BufferAttribute | InterleavedBufferAttribute> | undefined;
        normal?: Array<BufferAttribute | InterleavedBufferAttribute> | undefined;
        color?: Array<BufferAttribute | InterleavedBufferAttribute> | undefined;
      }
    | undefined {
    return this._objRef?.morphAttributes;
  }
  @Input()
  public set morphTargetsRelative(value: boolean) {
    if (this._objRef) {
      this._objRef.morphTargetsRelative = value;
    }
  }

  public get morphTargetsRelative(): boolean | undefined {
    return this._objRef?.morphTargetsRelative;
  }
  @Input()
  public set groups(value: GeometryGroup[]) {
    if (this._objRef) {
      this._objRef.groups = value;
    }
  }

  public get groups(): GeometryGroup[] | undefined {
    return this._objRef?.groups;
  }
  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3 | null>(this._objRef.boundingBox, value);
    }
  }
  public get boundingBox(): (Box3 | null) | undefined {
    return this._objRef?.boundingBox;
  }
  @Input()
  public set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere | null>(this._objRef.boundingSphere, value);
    }
  }
  public get boundingSphere(): (Sphere | null) | undefined {
    return this._objRef?.boundingSphere;
  }
  @Input()
  public set drawRange(value: { start: number; count: number }) {
    if (this._objRef) {
      this._objRef.drawRange = value;
    }
  }

  public get drawRange(): { start: number; count: number } | undefined {
    return this._objRef?.drawRange;
  }
  @Input()
  public set userData(value: Record<string, any>) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  public get userData(): Record<string, any> | undefined {
    return this._objRef?.userData;
  }
  public get isBufferGeometry(): true | undefined {
    return this._objRef?.isBufferGeometry;
  }
}
