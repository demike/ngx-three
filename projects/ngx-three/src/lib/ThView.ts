import { Component, ContentChild, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { Color, Object3D, Vector4 } from 'three';
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
  public set contentScene(scene: ThScene | undefined) {
    if (scene) {
      this.scene = scene;
    }
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
  public set contentCamera(camera: ThCamera<any> | undefined) {
    if (camera) {
      this.camera = camera;
    }
  }

  // renderer parameters
  // -----------------------------------------------------------------------------------------------
  /**
   * enable / disable shadows
   */
  @Input()
  public shadow?: boolean;

  @Input()
  public viewPort?: Vector4 | { x: number; y: number; width: number; height: number };

  @Input()
  public scissor?: Vector4 | { x: number; y: number; width: number; height: number };

  /**
   * Enable the scissor test. When this is enabled,
   * only the pixels within the defined scissor area will be affected by further renderer actions.
   */
  @Input()
  public scissorTest?: boolean;

  /**
   * Sets the clear color
   */
  @Input()
  clearColor?: Color | string | number;

  /**
   * a float with the current clear alpha. Ranges from 0 to 1.
   */
  @Input()
  clearAlpha?: number;
  // -----------------------------------------------------------------------------------------------

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
