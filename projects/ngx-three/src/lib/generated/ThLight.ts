// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, Light, LightShadow } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-light',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }],
})
export class ThLight<
  TARGS extends any[] = [hex?: number | string, intensity?: number]
> extends ThObject3D<TARGS> {
  @Input()
  public obj!: Light;
  protected getType(): Type<Light> {
    return Light;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.color = applyValue<Color>(this.obj.color, value);
    }
  }
  @Input()
  public set intensity(value: number) {
    if (this.obj) {
      this.obj.intensity = value;
    }
  }

  @Input()
  public set shadow(value: LightShadow) {
    if (this.obj) {
      this.obj.shadow = value;
    }
  }

  @Input()
  public set shadowCameraFov(value: any) {
    if (this.obj) {
      this.obj.shadowCameraFov = value;
    }
  }

  @Input()
  public set shadowCameraLeft(value: any) {
    if (this.obj) {
      this.obj.shadowCameraLeft = value;
    }
  }

  @Input()
  public set shadowCameraRight(value: any) {
    if (this.obj) {
      this.obj.shadowCameraRight = value;
    }
  }

  @Input()
  public set shadowCameraTop(value: any) {
    if (this.obj) {
      this.obj.shadowCameraTop = value;
    }
  }

  @Input()
  public set shadowCameraBottom(value: any) {
    if (this.obj) {
      this.obj.shadowCameraBottom = value;
    }
  }

  @Input()
  public set shadowCameraNear(value: any) {
    if (this.obj) {
      this.obj.shadowCameraNear = value;
    }
  }

  @Input()
  public set shadowCameraFar(value: any) {
    if (this.obj) {
      this.obj.shadowCameraFar = value;
    }
  }

  @Input()
  public set shadowBias(value: any) {
    if (this.obj) {
      this.obj.shadowBias = value;
    }
  }

  @Input()
  public set shadowMapWidth(value: any) {
    if (this.obj) {
      this.obj.shadowMapWidth = value;
    }
  }

  @Input()
  public set shadowMapHeight(value: any) {
    if (this.obj) {
      this.obj.shadowMapHeight = value;
    }
  }
}
