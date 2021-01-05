import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { Font, TextGeometry, TextGeometryParameters } from "three";
import { ThGeometry } from "./ThGeometry";

@Component({
  selector: "th-textGeometry",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThTextGeometry) },
  ],
})
export class ThTextGeometry<
  TARGS extends any[] = [text: string, parameters: TextGeometryParameters]
> extends ThGeometry<TARGS> {
  public obj!: TextGeometry;
  protected getType(): Type<TextGeometry> {
    return TextGeometry;
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
    /**
     * @default 50
     */
    height: number;
    curveSegments: number;
    /**
     * @default false
     */
    bevelEnabled: boolean;
    /**
     * @default 10
     */
    bevelThickness: number;
    /**
     * @default 8
     */
    bevelSize: number;
    bevelOffset: number;
    bevelSegments: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
