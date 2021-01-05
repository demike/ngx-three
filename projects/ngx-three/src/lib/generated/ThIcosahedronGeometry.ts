import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { IcosahedronGeometry } from "three";
import { ThGeometry } from "./ThGeometry";

@Component({
  selector: "th-icosahedronGeometry",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThIcosahedronGeometry),
    },
  ],
})
export class ThIcosahedronGeometry<
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThGeometry<TARGS> {
  public obj!: IcosahedronGeometry;
  protected getType(): Type<IcosahedronGeometry> {
    return IcosahedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
