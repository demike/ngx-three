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
  TARGS = [hex?: number | string, intensity?: number]
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

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set color(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  // @ts-ignore
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  // @ts-ignore
  public get intensity(): number | undefined {
    return this._objRef?.intensity;
  }
  // @ts-ignore
  public get isLight(): true | undefined {
    return this._objRef?.isLight;
  }
  @Input()
  public set shadow(value: LightShadow) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  // @ts-ignore
  public get shadow(): LightShadow | undefined {
    return this._objRef?.shadow;
  }
  @Input()
  public set shadowCameraFov(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraFov = value;
    }
  }

  // @ts-ignore
  public get shadowCameraFov(): any | undefined {
    return this._objRef?.shadowCameraFov;
  }
  @Input()
  public set shadowCameraLeft(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraLeft = value;
    }
  }

  // @ts-ignore
  public get shadowCameraLeft(): any | undefined {
    return this._objRef?.shadowCameraLeft;
  }
  @Input()
  public set shadowCameraRight(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraRight = value;
    }
  }

  // @ts-ignore
  public get shadowCameraRight(): any | undefined {
    return this._objRef?.shadowCameraRight;
  }
  @Input()
  public set shadowCameraTop(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraTop = value;
    }
  }

  // @ts-ignore
  public get shadowCameraTop(): any | undefined {
    return this._objRef?.shadowCameraTop;
  }
  @Input()
  public set shadowCameraBottom(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraBottom = value;
    }
  }

  // @ts-ignore
  public get shadowCameraBottom(): any | undefined {
    return this._objRef?.shadowCameraBottom;
  }
  @Input()
  public set shadowCameraNear(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraNear = value;
    }
  }

  // @ts-ignore
  public get shadowCameraNear(): any | undefined {
    return this._objRef?.shadowCameraNear;
  }
  @Input()
  public set shadowCameraFar(value: any) {
    if (this._objRef) {
      this._objRef.shadowCameraFar = value;
    }
  }

  // @ts-ignore
  public get shadowCameraFar(): any | undefined {
    return this._objRef?.shadowCameraFar;
  }
  @Input()
  public set shadowBias(value: any) {
    if (this._objRef) {
      this._objRef.shadowBias = value;
    }
  }

  // @ts-ignore
  public get shadowBias(): any | undefined {
    return this._objRef?.shadowBias;
  }
  @Input()
  public set shadowMapWidth(value: any) {
    if (this._objRef) {
      this._objRef.shadowMapWidth = value;
    }
  }

  // @ts-ignore
  public get shadowMapWidth(): any | undefined {
    return this._objRef?.shadowMapWidth;
  }
  @Input()
  public set shadowMapHeight(value: any) {
    if (this._objRef) {
      this._objRef.shadowMapHeight = value;
    }
  }

  // @ts-ignore
  public get shadowMapHeight(): any | undefined {
    return this._objRef?.shadowMapHeight;
  }
}
