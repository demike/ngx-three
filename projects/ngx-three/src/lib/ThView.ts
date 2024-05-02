import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  inject,
  InjectionToken,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Color, Object3D, Raycaster, Renderer, Vector4 } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RAYCASTER, RaycasterService } from './events/raycaster.service';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
import { ThScene } from './generated/ThScene';
import { ThEngineService } from './ThEngine.service';

export const HOST_ELEMENT = new InjectionToken<ElementRef<HTMLElement>>('HOST_ELEMENT');

@Component({
  selector: 'th-view',
  template: '<ng-content/>',
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThView) },
    { provide: RAYCASTER, useValue: new Raycaster() },
    RaycasterService,
  ],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThView implements OnInit {
  public readonly hostElement = inject(HOST_ELEMENT);
  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
  protected _camera?: ThCamera;
  protected _viewPort?: Vector4 | { x: number; y: number; width: number; height: number };

  protected _effectComposer?: EffectComposer;

  constructor(
    protected engServ: ThEngineService,
    protected raycaster: RaycasterService,
  ) {}

  @Input()
  public scene?: ThScene;

  @ContentChild(ThScene)
  public set contentScene(scene: ThScene | undefined) {
    if (scene) {
      this.scene = scene;
    }
  }

  @Input()
  public set effectComposer(effectComposer: EffectComposer | undefined) {
    this._effectComposer = effectComposer;
    this.configureEffectComposerRenderTarget();
  }

  public get effectComposer() {
    return this._effectComposer;
  }

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
  public set viewPort(viewPort: Vector4 | { x: number; y: number; width: number; height: number } | undefined) {
    this._viewPort = viewPort;
    this.configureEffectComposerRenderTarget();
  }

  public get viewPort() {
    return this._viewPort;
  }

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
    renderer: Renderer[];
    scene: ThScene;
    camera: ThCamera;
  }>();

  ngOnInit(): void {
    this.initRaycaster();
  }

  private initRaycaster() {
    if (this.camera) {
      this.raycaster.init(this.camera, this.hostElement.nativeElement);
    }
  }

  add(_scene: Object3D) {
    // nothing to do here
  }

  remove(_scene: Object3D) {
    // norhing to do
  }

  private configureEffectComposerRenderTarget() {
    if (!this.viewPort || !this.effectComposer) {
      return;
    } else {
      let width: number;
      let height: number;
      if (this.viewPort instanceof Vector4) {
        width = this.viewPort.z;
        height = this.viewPort?.width;
      } else {
        width = this.viewPort.width;
        height = this.viewPort.height;
      }
      //TODO: check if pixel ration ha
      this.effectComposer.setSize(width, height);
    }
  }
}
