// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Host,
  Input,
  Type,
} from '@angular/core';
import { Camera } from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { ThCanvas } from '../ThCanvas';
import { ThControlBase } from '../ThControlBase';
import { ThCamera } from './ThCamera';

@Component({
  selector: 'th-firstPersonControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThFirstPersonControls),
    },
  ],
})
export class ThFirstPersonControls<
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<TARGS> {
  public obj!: FirstPersonControls;
  protected getType(): Type<FirstPersonControls> {
    return FirstPersonControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.obj) {
      this.obj.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement | HTMLDocument) {
    if (this.obj) {
      this.obj.domElement = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this.obj) {
      this.obj.enabled = value;
    }
  }

  @Input()
  public set movementSpeed(value: number) {
    if (this.obj) {
      this.obj.movementSpeed = value;
    }
  }

  @Input()
  public set lookSpeed(value: number) {
    if (this.obj) {
      this.obj.lookSpeed = value;
    }
  }

  @Input()
  public set lookVertical(value: boolean) {
    if (this.obj) {
      this.obj.lookVertical = value;
    }
  }

  @Input()
  public set autoForward(value: boolean) {
    if (this.obj) {
      this.obj.autoForward = value;
    }
  }

  @Input()
  public set activeLook(value: boolean) {
    if (this.obj) {
      this.obj.activeLook = value;
    }
  }

  @Input()
  public set heightSpeed(value: boolean) {
    if (this.obj) {
      this.obj.heightSpeed = value;
    }
  }

  @Input()
  public set heightCoef(value: number) {
    if (this.obj) {
      this.obj.heightCoef = value;
    }
  }

  @Input()
  public set heightMin(value: number) {
    if (this.obj) {
      this.obj.heightMin = value;
    }
  }

  @Input()
  public set heightMax(value: number) {
    if (this.obj) {
      this.obj.heightMax = value;
    }
  }

  @Input()
  public set constrainVertical(value: boolean) {
    if (this.obj) {
      this.obj.constrainVertical = value;
    }
  }

  @Input()
  public set verticalMin(value: number) {
    if (this.obj) {
      this.obj.verticalMin = value;
    }
  }

  @Input()
  public set verticalMax(value: number) {
    if (this.obj) {
      this.obj.verticalMax = value;
    }
  }

  @Input()
  public set mouseDragOn(value: boolean) {
    if (this.obj) {
      this.obj.mouseDragOn = value;
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
