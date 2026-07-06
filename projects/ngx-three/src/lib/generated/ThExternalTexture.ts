/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { ExternalTexture, TextureEventMap } from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-externalTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThTextureBase,
      useExisting: forwardRef(() => ThExternalTexture),
    },
  ],
})
export class ThExternalTexture<
  T extends ExternalTexture = ExternalTexture,
  TARGS = /* sourceTexture? */ WebGLTexture | object | null,
> extends ThTexture<null, TextureEventMap, T, TARGS> {
  public getType(): Type<ExternalTexture> {
    return ExternalTexture;
  }

  @Input()
  public set sourceTexture(value: WebGLTexture | object | null) {
    if (this._objRef) {
      this._objRef.sourceTexture = value as any;
    }
  }

  public get sourceTexture(): (WebGLTexture | object | null) | undefined {
    return this._objRef?.sourceTexture;
  }
  public get isExternalTexture(): true | undefined {
    return this._objRef?.isExternalTexture;
  }
}
