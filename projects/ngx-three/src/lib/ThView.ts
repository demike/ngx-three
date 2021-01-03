import { Component, ContentChild, forwardRef, Input } from '@angular/core';
import { Object3D, Vector4 } from 'three';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
import { ThScene } from './generated/ThScene';

@Component({
  selector: 'th-view',
  template: '',
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThView) }],
})
export class ThView {
  @Input()
  public scene?: ThScene;

  @ContentChild(ThScene)
  public set contentScene(scene: ThScene) {
    this.scene = scene;
  }

  @Input()
  public camera?: ThCamera;

  @ContentChild(ThCamera)
  public set contentCamera(camera: ThCamera) {
    this.camera = camera;
  }

  @Input()
  public viewPort?:
    | Vector4
    | { x: number; y: number; width: number; height: number };

  add(scene: Object3D) {
    // nothing to do here
  }

  remove(scene: Object3D) {
    // norhing to do
  }
}
