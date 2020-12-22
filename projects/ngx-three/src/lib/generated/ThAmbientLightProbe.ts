import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from "@angular/core";
import { AmbientLightProbe, Color } from "three";
import { ThLightProbe } from "./ThLightProbe";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-ambientLightProbe",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLightProbe) },
  ],
})
export class ThAmbientLightProbe<
  TARGS extends any[] = [color: Color | string | number, intensity: number]
> extends ThLightProbe<TARGS> {
  protected obj!: AmbientLightProbe;
  protected getObjectType(): Type<AmbientLightProbe> {
    return AmbientLightProbe;
  }
}
