/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SkipSelf,
  Type,
} from '@angular/core';
import {
  Box3,
  BufferAttribute,
  BufferGeometry,
  InterleavedBufferAttribute,
  Sphere,
  Vector3,
} from 'three';
import { ThGeometryBase } from '../ThGeometryBase';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-bufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThBufferGeometry<
  T extends BufferGeometry = BufferGeometry,
  TARGS extends any[] = []
> extends ThGeometryBase<T, TARGS> {
  protected getType(): Type<BufferGeometry> {
    return BufferGeometry;
  }

  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set index(
    value:
      | BufferAttribute
      | null
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number]
  ) {
    if (this._objRef) {
      this._objRef.index = applyValue<BufferAttribute | null>(
        this._objRef.index,
        value
      );
    }
  }
  @Input()
  public set attributes(value: {
    [name: string]: BufferAttribute | InterleavedBufferAttribute;
  }) {
    if (this._objRef) {
      this._objRef.attributes = value;
    }
  }

  @Input()
  public set morphAttributes(value: {
    [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>;
  }) {
    if (this._objRef) {
      this._objRef.morphAttributes = value;
    }
  }

  @Input()
  public set morphTargetsRelative(value: boolean) {
    if (this._objRef) {
      this._objRef.morphTargetsRelative = value;
    }
  }

  @Input()
  public set groups(
    value: Array<{ start: number; count: number; materialIndex?: number }>
  ) {
    if (this._objRef) {
      this._objRef.groups = value;
    }
  }

  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3 | null>(
        this._objRef.boundingBox,
        value
      );
    }
  }
  @Input()
  public set boundingSphere(
    value: Sphere | null | [center: Vector3, radius: number]
  ) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere | null>(
        this._objRef.boundingSphere,
        value
      );
    }
  }
  @Input()
  public set drawRange(value: { start: number; count: number }) {
    if (this._objRef) {
      this._objRef.drawRange = value;
    }
  }

  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  @Input()
  public set drawcalls(value: any) {
    if (this._objRef) {
      this._objRef.drawcalls = value;
    }
  }

  @Input()
  public set offsets(value: any) {
    if (this._objRef) {
      this._objRef.offsets = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
