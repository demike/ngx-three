/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, inject, Type } from '@angular/core';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { ThCSS2DObjectGen } from '../ThCSS2DObjectGen';
import { ThObject3D } from '../ThObject3D';

@Component({
  selector: 'th-cSS2DObject',
  template: '<ng-content/>',
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObject) }],
})
export class ThCSS2DObject<
  T extends CSS2DObject = CSS2DObject,
  TARGS = /* element */ HTMLElement,
> extends ThCSS2DObjectGen<T, TARGS> {
  elementRef = inject(ElementRef);

  public getType(): Type<CSS2DObject> {
    return CSS2DObject;
  }

  public override createThreeInstance(args?: unknown) {
    return super.createThreeInstance(args ?? this.elementRef?.nativeElement);
  }
}
