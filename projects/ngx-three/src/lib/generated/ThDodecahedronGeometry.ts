import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { DodecahedronGeometry } from "three";
import { ThGeometry } from "./ThGeometry";

@Component({
  selector: "th-dodecahedronGeometry",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThDodecahedronGeometry),
    },
  ],
})
export class ThDodecahedronGeometry<
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThGeometry<TARGS> {
  public obj!: DodecahedronGeometry;
  protected getType(): Type<DodecahedronGeometry> {
    return DodecahedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set parameters(value: { radius: number; detail: number }) {
    if (this.obj) {
      this.obj.parameters = value;
    }
  }
}
