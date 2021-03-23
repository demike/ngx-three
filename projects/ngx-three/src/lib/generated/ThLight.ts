/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, Light, LightShadow } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-light',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }]
})
export class ThLight<TARGS extends any[] = [hex?: number | string, intensity?: number]> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: Light;
  protected getType(): Type<Light> {
    return Light;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.objRef) {
      this.objRef.color = applyValue<Color>(this.objRef.color, value);
    }
  }
  @Input()
  public set intensity(value: number) {
    if (this.objRef) {
      this.objRef.intensity = value;
    }
  }

  @Input()
  public set shadow(value: LightShadow) {
    if (this.objRef) {
      this.objRef.shadow = value;
    }
  }

  @Input()
  public set shadowCameraFov(value: any) {
    if (this.objRef) {
      this.objRef.shadowCameraFov = value;
    }
  }

  @Input()
  public set shadowCameraLeft(value: any) {
    if (this.objRef) {
      this.objRef.shadowCameraLeft = value;
    }
  }

  @Input()
  public set shadowCameraRight(value: any) {
    if (this.objRef) {
      this.objRef.shadowCameraRight = value;
    }
  }

  @Input()
  public set shadowCameraTop(value: any) {
    if (this.objRef) {
      this.objRef.shadowCameraTop = value;
    }
  }

  @Input()
  public set shadowCameraBottom(value: any) {
    if (this.objRef) {
      this.objRef.shadowCameraBottom = value;
    }
  }

  @Input()
  public set shadowCameraNear(value: any) {
    if (this.objRef) {
      this.objRef.shadowCameraNear = value;
    }
  }

  @Input()
  public set shadowCameraFar(value: any) {
    if (this.objRef) {
      this.objRef.shadowCameraFar = value;
    }
  }

  @Input()
  public set shadowBias(value: any) {
    if (this.objRef) {
      this.objRef.shadowBias = value;
    }
  }

  @Input()
  public set shadowMapWidth(value: any) {
    if (this.objRef) {
      this.objRef.shadowMapWidth = value;
    }
  }

  @Input()
  public set shadowMapHeight(value: any) {
    if (this.objRef) {
      this.objRef.shadowMapHeight = value;
    }
  }
}
