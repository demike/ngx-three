import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { TorusBufferGeometry } from "three";
import { ThBufferGeometry } from "./ThBufferGeometry";
import { ThGeometry } from "./ThGeometry";

@Component({
  selector: "th-torusBufferGeometry",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThTorusBufferGeometry),
    },
  ],
})
export class ThTorusBufferGeometry<
  TARGS extends any[] = [
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number
  ]
> extends ThBufferGeometry<TARGS> {
  public obj!: TorusBufferGeometry;
  protected getType(): Type<TorusBufferGeometry> {
    return TorusBufferGeometry;
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
