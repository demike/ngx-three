import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { SphereBufferGeometry } from "three";
import { ThBufferGeometry } from "./ThBufferGeometry";
import { ThGeometry } from "./ThGeometry";

@Component({
  selector: "th-sphereBufferGeometry",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThSphereBufferGeometry),
    },
  ],
})
export class ThSphereBufferGeometry<
  TARGS extends any[] = [
    radius?: number,
    widthSegments?: number,
    heightSegments?: number,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThBufferGeometry<TARGS> {
  public obj!: SphereBufferGeometry;
  protected getType(): Type<SphereBufferGeometry> {
    return SphereBufferGeometry;
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
    widthSegments: number;
    heightSegments: number;
    phiStart: number;
    phiLength: number;
    thetaStart: number;
    thetaLength: number;
  }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
