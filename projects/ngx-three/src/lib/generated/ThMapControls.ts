// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Host,
  Type,
} from '@angular/core';
import { Camera } from 'three';
import { MapControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThCanvas } from '../ThCanvas';
import { ThControlBase } from '../ThControlBase';
import { ThCamera } from './ThCamera';
import { ThOrbitControls } from './ThOrbitControls';

@Component({
  selector: 'th-mapControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThMapControls) },
  ],
})
export class ThMapControls<
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
> extends ThOrbitControls<TARGS> {
  public obj!: MapControls;
  protected getType(): Type<MapControls> {
    return MapControls;
  }

  constructor(@Host() camera: ThCamera, public canvas: ThCanvas) {
    super(camera);
  }

  protected createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this.camera, this.canvas];
    }
    super.createThreeInstance(args);
  }
}
