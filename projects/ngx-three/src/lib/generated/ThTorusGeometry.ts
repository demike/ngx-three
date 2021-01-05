import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { TorusGeometry } from "three";
import { ThGeometry } from "./ThGeometry";

@Component({
  selector: "th-torusGeometry",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThTorusGeometry) },
  ],
})
export class ThTorusGeometry<
  TARGS extends any[] = [
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number
  ]
> extends ThGeometry<TARGS> {
  public obj!: TorusGeometry;
  protected getType(): Type<TorusGeometry> {
    return TorusGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: {
    radius: number;
    tube: number;
    radialSegments: number;
    tubularSegments: number;
    arc: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
