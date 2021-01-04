import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from "@angular/core";
import { OrthographicCamera } from "three";
import { ThCamera } from "./ThCamera";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-orthographicCamera",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThOrthographicCamera),
    },
    { provide: ThCamera, useExisting: forwardRef(() => ThOrthographicCamera) },
  ],
})
export class ThOrthographicCamera<
  TARGS extends any[] = [
    left: number,
    right: number,
    top: number,
    bottom: number,
    near: number,
    far: number
  ]
> extends ThCamera<TARGS> {
  public obj!: OrthographicCamera;
  protected getType(): Type<OrthographicCamera> {
    return OrthographicCamera;
  }

  @Input()
  public set type(value: "OrthographicCamera") {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set zoom(value: number) {
    if (this.obj) {
      this.obj.zoom = value;
    }
  }

  @Input()
  public set view(
    value: null | {
      enabled: boolean;
      fullWidth: number;
      fullHeight: number;
      offsetX: number;
      offsetY: number;
      width: number;
      height: number;
    }
  ) {
    if (this.obj) {
      this.obj.view = value;
    }
  }

  @Input()
  public set left(value: number) {
    if (this.obj) {
      this.obj.left = value;
    }
  }

  @Input()
  public set right(value: number) {
    if (this.obj) {
      this.obj.right = value;
    }
  }

  @Input()
  public set top(value: number) {
    if (this.obj) {
      this.obj.top = value;
    }
  }

  @Input()
  public set bottom(value: number) {
    if (this.obj) {
      this.obj.bottom = value;
    }
  }

  @Input()
  public set near(value: number) {
    if (this.obj) {
      this.obj.near = value;
    }
  }

  @Input()
  public set far(value: number) {
    if (this.obj) {
      this.obj.far = value;
    }
  }
}
