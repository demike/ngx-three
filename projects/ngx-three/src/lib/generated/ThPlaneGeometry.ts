import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { PlaneGeometry } from "three";
import { ThGeometry } from "./ThGeometry";

@Component({
  selector: "th-planeGeometry",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThPlaneGeometry) },
  ],
})
export class ThPlaneGeometry<
  TARGS extends any[] = [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number
  ]
> extends ThGeometry<TARGS> {
  public obj!: PlaneGeometry;
  protected getType(): Type<PlaneGeometry> {
    return PlaneGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    width: number;
    height: number;
    widthSegments: number;
    heightSegments: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
