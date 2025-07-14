/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { DepthArrayTexture } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThDepthTexture } from './ThDepthTexture';

@Component({
  selector: 'th-depthArrayTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThDepthArrayTexture),
    },
  ],
})
export class ThDepthArrayTexture<
  T extends DepthArrayTexture = DepthArrayTexture,
  TARGS = [width?: number, height?: number, depth?: number],
> extends ThDepthTexture<T, TARGS> {
  public getType(): Type<DepthArrayTexture> {
    return DepthArrayTexture;
  }

  public get isDepthArrayTexture(): true | undefined {
    return this._objRef?.isDepthArrayTexture;
  }
  @Input()
  public set layerUpdates(value: Set<number>) {
    if (this._objRef) {
      this._objRef.layerUpdates = value;
    }
  }

  public get layerUpdates(): Set<number> | undefined {
    return this._objRef?.layerUpdates;
  }
}
