// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, LineBasicMaterial, LineBasicMaterialParameters } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-lineBasicMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThLineBasicMaterial) },
  ],
})
export class ThLineBasicMaterial<
  TARGS extends any[] = [parameters?: LineBasicMaterialParameters]
> extends ThMaterial<TARGS> {
  @Input()
  public obj!: LineBasicMaterial;
  protected getType(): Type<LineBasicMaterial> {
    return LineBasicMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.color = applyValue<Color>(this.obj.color, value);
    }
  }
  @Input()
  public set linewidth(value: number) {
    if (this.obj) {
      this.obj.linewidth = value;
    }
  }

  @Input()
  public set linecap(value: string) {
    if (this.obj) {
      this.obj.linecap = value;
    }
  }

  @Input()
  public set linejoin(value: string) {
    if (this.obj) {
      this.obj.linejoin = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this.obj) {
      this.obj.morphTargets = value;
    }
  }
}
