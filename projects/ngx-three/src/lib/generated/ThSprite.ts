import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BufferGeometry, Sprite, SpriteMaterial, Vector2 } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-sprite',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }],
})
export class ThSprite<
  TARGS extends any[] = [material?: SpriteMaterial]
> extends ThObject3D<TARGS> {
  public obj!: Sprite;
  protected getType(): Type<Sprite> {
    return Sprite;
  }

  @Input()
  public set type(value: 'Sprite') {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set geometry(value: BufferGeometry) {
    if (this.obj) {
      this.obj.geometry = value;
    }
  }

  @Input()
  public set material(value: SpriteMaterial) {
    if (this.obj) {
      this.obj.material = value;
    }
  }

  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this.obj) {
      this.obj.center = applyValue<Vector2>(this.obj.center, value);
    }
  }
}
