/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { Camera, Event, Scene } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-cSS3DObjectGen',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObjectGen) },
  ],
})
export class ThCSS3DObjectGen<
  T extends CSS3DObject = CSS3DObject,
  TARGS = /* element */ HTMLElement,
> extends ThObject3D<Event, T, TARGS> {
  public getType(): Type<CSS3DObject> {
    return CSS3DObject;
  }

  @Input()
  public set element(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.element = value;
    }
  }

  // @ts-ignore
  public get element(): HTMLElement | undefined {
    return this._objRef?.element;
  }
  @Input()
  public set onBeforeRender(
    value: (renderer: unknown, scene: Scene, camera: Camera) => void,
  ) {
    if (this._objRef) {
      this._objRef.onBeforeRender = value;
    }
  }

  // @ts-ignore
  public get onBeforeRender():
    | ((renderer: unknown, scene: Scene, camera: Camera) => void)
    | undefined {
    return this._objRef?.onBeforeRender;
  }
  @Input()
  public set onAfterRender(
    value: (renderer: unknown, scene: Scene, camera: Camera) => void,
  ) {
    if (this._objRef) {
      this._objRef.onAfterRender = value;
    }
  }

  // @ts-ignore
  public get onAfterRender():
    | ((renderer: unknown, scene: Scene, camera: Camera) => void)
    | undefined {
    return this._objRef?.onAfterRender;
  }
}
