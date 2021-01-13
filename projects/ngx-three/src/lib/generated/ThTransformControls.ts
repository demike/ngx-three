// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Host,
  Input,
  Type,
} from '@angular/core';
import { Camera, MOUSE, Object3D } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { ThCanvas } from '../ThCanvas';
import { ThControlBase } from '../ThControlBase';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-transformControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThTransformControls),
    },
  ],
})
export class ThTransformControls<
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThObject3D<TARGS> {
  public obj!: TransformControls;
  protected getType(): Type<TransformControls> {
    return TransformControls;
  }

  @Input()
  public set domElement(value: HTMLElement) {
    if (this.obj) {
      this.obj.domElement = value;
    }
  }

  @Input()
  public set camera(value: Camera) {
    if (this.obj) {
      this.obj.camera = value;
    }
  }

  @Input()
  public set object(value: Object3D | undefined) {
    if (this.obj) {
      this.obj.object = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this.obj) {
      this.obj.enabled = value;
    }
  }

  @Input()
  public set axis(value: string | null) {
    if (this.obj) {
      this.obj.axis = value;
    }
  }

  @Input()
  public set mode(value: string) {
    if (this.obj) {
      this.obj.mode = value;
    }
  }

  @Input()
  public set translationSnap(value: number | null) {
    if (this.obj) {
      this.obj.translationSnap = value;
    }
  }

  @Input()
  public set rotationSnap(value: number | null) {
    if (this.obj) {
      this.obj.rotationSnap = value;
    }
  }

  @Input()
  public set space(value: string) {
    if (this.obj) {
      this.obj.space = value;
    }
  }

  @Input()
  public set size(value: number) {
    if (this.obj) {
      this.obj.size = value;
    }
  }

  @Input()
  public set dragging(value: boolean) {
    if (this.obj) {
      this.obj.dragging = value;
    }
  }

  @Input()
  public set showX(value: boolean) {
    if (this.obj) {
      this.obj.showX = value;
    }
  }

  @Input()
  public set showY(value: boolean) {
    if (this.obj) {
      this.obj.showY = value;
    }
  }

  @Input()
  public set showZ(value: boolean) {
    if (this.obj) {
      this.obj.showZ = value;
    }
  }

  @Input()
  public set mouseButtons(value: { LEFT: MOUSE; MIDDLE: MOUSE; RIGHT: MOUSE }) {
    if (this.obj) {
      this.obj.mouseButtons = value;
    }
  }

  constructor(@Host() camera: ThCamera, public canvas: ThCanvas) {
    super(camera);
  }

  protected createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this.camera, this.canvas];
    }
    super.createThreeInstance(args);
  }
}
