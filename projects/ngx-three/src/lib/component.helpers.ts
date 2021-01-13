import { forwardRef, Provider, Type } from '@angular/core';
import { Object3D } from 'three';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';

export function createThProviderArray(cls: Type<any>, baseCls: Type<any>) {
  const providers: Provider[] = [];
  if (ThObject3D.isPrototypeOf(baseCls) || Object3D === baseCls) {
    providers.push({ provide: ThObject3D, useExisting: forwardRef(() => cls) });

    if (ThCamera.isPrototypeOf(baseCls) || ThCamera === baseCls) {
      providers.push({ provide: ThCamera, useExisting: forwardRef(() => cls) });
    }
  }
}

/**
 * usage:
 *
 * @Component({
 *  providers: createObj3DProviderArray(forwardRef(() => TheComponent)))
 * })
 * export class TheComponent {
 * ...
 * }
 * @param type the Object3D derived Class to be provided
 */
export function createObj3DProviderArray(type: Type<any>) {
  return [{ provide: ThObject3D, useExisting: forwardRef(() => type) }];
}

export function createCameraProviderArray(type: Type<any>) {
  return [
    { provide: ThObject3D, useExisting: forwardRef(() => type) },
    { provide: ThCamera, useExisting: forwardRef(() => type) },
  ];
}
