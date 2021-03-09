/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Material, MultiMaterial } from 'three';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-multiMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThMultiMaterial) },
  ],
})
export class ThMultiMaterial<
  TARGS extends any[] = [materials?: Material[]]
> extends ThMaterial<TARGS> {
  @Input()
  public obj!: MultiMaterial;
  protected getType(): Type<MultiMaterial> {
    return MultiMaterial;
  }

  @Input()
  public set materials(value: Material[]) {
    if (this.obj) {
      this.obj.materials = value;
    }
  }
}
