/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, inject, Type } from '@angular/core';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { ThObject3D } from '../ThObject3D';
import { ThCSS3DObjectGen } from '../ThCSS3DObjectGen';

@Component({
  selector: 'th-cSS3DObject',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCSS3DObject) }],
})
export class ThCSS3DObject<
  T extends CSS3DObject = CSS3DObject,
  TARGS = /* element */ HTMLElement,
> extends ThCSS3DObjectGen<T, TARGS> {
  elementRef = inject(ElementRef);

  public getType(): Type<CSS3DObject> {
    return CSS3DObject;
  }

  public override createThreeInstance(args?: unknown) {
    return super.createThreeInstance(args ?? this.elementRef?.nativeElement);
  }
}
