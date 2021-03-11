import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  Inject,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { Object3D } from 'three';
import { RaycasterService } from './events/raycaster.service';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
import { ThScene } from './generated/ThScene';
import { ThEngineService } from './ThEngine.service';
import { ThView } from './ThView';

@Component({
  selector: 'th-canvas',
  styleUrls: ['./ThCanvas.scss'],
  template: '<canvas #rendererCanvas id="rendererCanvas" style="width: 100%; height: 100%"></canvas>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) }, ThEngineService, forwardRef(() => RaycasterService)]
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThCanvas implements OnInit, AfterViewInit {
  private static instanceCnt = 0;
  public readonly nid = ThCanvas.instanceCnt++;
  constructor(
    private engServ: ThEngineService,
    @Inject(forwardRef(() => RaycasterService))
    protected raycaster: RaycasterService
  ) {
    console.log('canvas ' + this.nid);
  }

  @Output()
  public get onRender() {
    return this.engServ.onRender;
  }

  public get obj() {
    return this;
  }

  @ContentChild(ThScene)
  public set scene(scene: ThScene) {
    if (this.globalView) {
      this.globalView.scene = scene;
    }
  }

  @ContentChild(ThCamera)
  public set camera(camera: ThCamera) {
    if (this.globalView) {
      this.globalView.camera = camera;
    }
  }

  @ContentChildren(ThView)
  public set views(viewList: QueryList<ThView>) {
    viewList.forEach((v) => this.engServ.addView(v));
  }

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas?: ElementRef<HTMLCanvasElement>;

  private globalView?: ThView;
  ngAfterViewInit(): void {
    this.engServ.requestAnimationFrame();
  }

  public ngOnInit(): void {
    if (!this.rendererCanvas) {
      throw new Error('Missing Canvas');
    }
    this.rendererCanvas.nativeElement.id += this.nid;
    this.globalView = new ThView(this.raycaster, this.rendererCanvas);
    this.engServ.setCanvas(this.rendererCanvas.nativeElement);
    this.engServ.addView(this.globalView);
  }

  /**
   * add a Scene
   */
  add(scene: Object3D) {
    // nothing to do here
  }

  /**
   * remove a Scene
   */
  remove(scene: Object3D) {
    // norhing to do
  }
}
