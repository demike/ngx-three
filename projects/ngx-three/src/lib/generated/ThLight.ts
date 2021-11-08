/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, ColorRepresentation, Event, Light, LightShadow } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-light',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }],
})
export class ThLight<
  T extends Light = Light,
  TARGS extends any[] = [hex?: number | string, intensity?: number]
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<Light> {
    return Light;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  @Input()
  public set shadow(value: LightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  @Input()
  public set shadowCameraFov(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraFov = value;
    }
  }

  @Input()
  public set shadowCameraLeft(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraLeft = value;
    }
  }

  @Input()
  public set shadowCameraRight(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraRight = value;
    }
  }

  @Input()
  public set shadowCameraTop(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraTop = value;
    }
  }

  @Input()
  public set shadowCameraBottom(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraBottom = value;
    }
  }

  @Input()
  public set shadowCameraNear(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraNear = value;
    }
  }

  @Input()
  public set shadowCameraFar(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraFar = value;
    }
  }

  @Input()
  public set shadowBias(value: any) {
    if (this._objRef) {
      this._objRef.shadowBias = value;
    }
  }

  @Input()
  public set shadowMapWidth(value: any) {
    if (this._objRef) {
      this._objRef.shadowMapWidth = value;
    }
  }

  @Input()
  public set shadowMapHeight(value: any) {
    if (this._objRef) {
      this._objRef.shadowMapHeight = value;
    }
  }
}
