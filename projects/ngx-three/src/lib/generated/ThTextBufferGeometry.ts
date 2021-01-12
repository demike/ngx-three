import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Font, TextBufferGeometry, TextGeometryParameters } from 'three';
import { ThExtrudeBufferGeometry } from './ThExtrudeBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-textBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThTextBufferGeometry),
    },
  ],
})
export class ThTextBufferGeometry<
  TARGS extends any[] = [text: string, parameters: TextGeometryParameters]
> extends ThExtrudeBufferGeometry<TARGS> {
  public obj!: TextBufferGeometry;
  protected getType(): Type<TextBufferGeometry> {
    return TextBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    font: Font;
    size: number;
    height: number;
    curveSegments: number;
    bevelEnabled: boolean;
    bevelThickness: number;
    bevelSize: number;
    bevelOffset: number;
    bevelSegments: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
