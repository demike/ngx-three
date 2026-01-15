/* eslint-disable @typescript-eslint/ban-types */
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
import { ExternalTexture } from 'three';
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
  TARGS = /* sourceTexture? */ WebGLTexture | GPUTexture | null,
> extends ThTexture<null, T, TARGS> {
  public getType(): Type<ExternalTexture> {
    return ExternalTexture;
  }

  @Input()
  public set sourceTexture(value: WebGLTexture | GPUTexture | null) {
    if (this._objRef) {
      this._objRef.sourceTexture = value;
    }
  }

  public get sourceTexture(): (WebGLTexture | GPUTexture | null) | undefined {
    return this._objRef?.sourceTexture;
  }
  public get isExternalTexture(): true | undefined {
    return this._objRef?.isExternalTexture;
  }
}
