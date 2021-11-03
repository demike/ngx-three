import { Component, ContentChild, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { Object3D, Vector4 } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RaycasterService } from './events/raycaster.service';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
import { ThScene } from './generated/ThScene';
import { ThEngineService } from './ThEngine.service';

@Component({
  selector: 'th-view',
  template: '',
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThView) }, RaycasterService]
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThView implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
  protected _camera?: ThCamera;

  constructor(protected engServ: ThEngineService, protected raycaster: RaycasterService) {}

  @Input()
  public scene?: ThScene;

  @ContentChild(ThScene)
  public set contentScene(scene: ThScene) {
    this.scene = scene;
  }

  @Input()
  public effectComposer?: EffectComposer;

  @Input()
  public set camera(camera: ThCamera | undefined) {
    this._camera = camera;
    this.initRaycaster();
  }

  public get camera() {
    return this._camera;
  }

  @ContentChild(ThCamera)
  public set contentCamera(camera: ThCamera) {
    this.camera = camera;
  }

  @Input()
  public viewPort?: Vector4 | { x: number; y: number; width: number; height: number };

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output()
  public readonly onRender = new EventEmitter<{
    renderer: THREE.WebGLRenderer;
    scene: ThScene;
    camera: ThCamera;
  }>();

  ngOnInit(): void {
    this.initRaycaster();
  }

  private initRaycaster() {
    if (this.camera && this.engServ.canvas) {
      this.raycaster.init(this.camera, this.engServ.canvas);
    }
  }

  add(scene: Object3D) {
    // nothing to do here
  }

  remove(scene: Object3D) {
    // norhing to do
  }
}
