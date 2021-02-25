// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, RectAreaLight } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-rectAreaLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
  ],
})
export class ThRectAreaLight<
  TARGS extends any[] = [
    color?: Color | string | number,
    intensity?: number,
    width?: number,
    height?: number
  ]
> extends ThLight<TARGS> {
  @Input()
  public obj!: RectAreaLight;
  protected getType(): Type<RectAreaLight> {
    return RectAreaLight;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set width(value: number) {
    if (this.obj) {
      this.obj.width = value;
    }
  }

  @Input()
  public set height(value: number) {
    if (this.obj) {
      this.obj.height = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this.obj) {
      this.obj.intensity = value;
    }
  }
}
