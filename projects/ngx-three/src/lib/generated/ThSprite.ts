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
import { BufferGeometry, Event, Sprite, SpriteMaterial, Vector2 } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-sprite',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }],
})
export class ThSprite<
  T extends Sprite = Sprite,
  TARGS = /* material? */ SpriteMaterial
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<Sprite> {
    return Sprite;
  }

  @Input()
  public set type(value: 'Sprite') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set geometry(value: BufferGeometry) {
    if (this._objRef) {
      this._objRef.geometry = value;
    }
  }

  @Input()
  public set material(value: SpriteMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector2>(this._objRef.center, value);
    }
  }
}
