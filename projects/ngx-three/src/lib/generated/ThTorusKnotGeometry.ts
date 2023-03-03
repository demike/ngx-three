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
import { TorusKnotGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-torusKnotGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTorusKnotGeometry),
    },
  ],
})
export class ThTorusKnotGeometry<
  T extends TorusKnotGeometry = TorusKnotGeometry,
  TARGS = [
    radius?: number,
    tube?: number,
    tubularSegments?: number,
    radialSegments?: number,
    p?: number,
    q?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<TorusKnotGeometry> {
    return TorusKnotGeometry;
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
  public set parameters(value: {
    radius: number;
    tube: number;
    tubularSegments: number;
    radialSegments: number;
    p: number;
    q: number;
  }) {
    if (this._objRef) {
      this._objRef.parameters = value;
    }
  }

  // @ts-ignore
  public get parameters():
    | {
        radius: number;
        tube: number;
        tubularSegments: number;
        radialSegments: number;
        p: number;
        q: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
