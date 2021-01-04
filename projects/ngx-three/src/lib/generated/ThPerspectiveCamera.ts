import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { PerspectiveCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-perspectiveCamera',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
    { provide: ThCamera, useExisting: forwardRef(() => ThPerspectiveCamera) },
  ],
})
export class ThPerspectiveCamera<
  TARGS extends any[] = [fov: number, aspect: number, near: number, far: number]
> extends ThCamera<TARGS> {
  public obj!: PerspectiveCamera;
  protected getType(): Type<PerspectiveCamera> {
    return PerspectiveCamera;
  }

  @Input()
  public set type(value: 'PerspectiveCamera') {
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
  public set fov(value: number) {
    if (this.obj) {
      this.obj.fov = value;
    }
  }

  @Input()
  public set aspect(value: number) {
    if (this.obj) {
      this.obj.aspect = value;
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

  @Input()
  public set focus(value: number) {
    if (this.obj) {
      this.obj.focus = value;
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
  public set filmGauge(value: number) {
    if (this.obj) {
      this.obj.filmGauge = value;
    }
  }

  @Input()
  public set filmOffset(value: number) {
    if (this.obj) {
      this.obj.filmOffset = value;
    }
  }
}
