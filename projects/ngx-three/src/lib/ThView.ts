import {
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { Object3D, Vector4 } from 'three';
import { RaycasterService } from './events/raycaster.service';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
import { ThScene } from './generated/ThScene';

@Component({
  selector: 'th-view',
  template: '',
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThView) },
    RaycasterService,
  ],
})
export class ThView implements OnInit {
  protected _camera?: ThCamera;
  constructor(
    protected raycaster: RaycasterService,
    private canvas: ElementRef<HTMLCanvasElement>
  ) {}

  @Input()
  public scene?: ThScene;

  @ContentChild(ThScene)
  public set contentScene(scene: ThScene) {
    this.scene = scene;
  }

  @Input()
  public set camera(camera: ThCamera | undefined) {
    this._camera = camera;
    if (this._camera) {
      this.raycaster.init(this._camera, this.canvas.nativeElement);
    }
  }

  public get camera() {
    return this._camera;
  }

  @ContentChild(ThCamera)
  public set contentCamera(camera: ThCamera) {
    this.camera = camera;
  }

  @Input()
  public viewPort?:
    | Vector4
    | { x: number; y: number; width: number; height: number };

  ngOnInit(): void {
    if (this.camera) {
      this.raycaster.init(this.camera, this.canvas.nativeElement);
    }
  }

  add(scene: Object3D) {
    // nothing to do here
  }

  remove(scene: Object3D) {
    // norhing to do
  }
}
