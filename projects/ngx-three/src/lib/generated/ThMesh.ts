import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { BufferGeometry, Geometry, Material, Mesh } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-mesh",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThMesh) }],
})
export class ThMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial]
> extends ThObject3D<TARGS> {
  public obj!: Mesh<TGeometry, TMaterial>;
  protected getType(): Type<Mesh<TGeometry, TMaterial>> {
    return Mesh;
  }

  @Input()
  public set geometry(value: TGeometry) {
    if (this.obj) {
      this.obj.geometry = value;
    }
  }

  @Input()
  public set material(value: TMaterial) {
    if (this.obj) {
      this.obj.material = value;
    }
  }

  @Input()
  public set morphTargetInfluences(value: number[]) {
    if (this.obj) {
      this.obj.morphTargetInfluences = value;
    }
  }

  @Input()
  public set morphTargetDictionary(value: { [key: string]: number }) {
    if (this.obj) {
      this.obj.morphTargetDictionary = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
