import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Object3D } from 'three';
import { ThCamera } from './generated/ThCamera';
import { ThObject3D } from './generated/ThObject3D';
import { ThScene } from './generated/ThScene';
import { ThEngineService } from './ThEngine.service';
import { ThView } from './ThView';

@Component({
  selector: 'th-canvas',
  styleUrls: ['./ThCanvas.scss'],
  template:
    '<canvas #rendererCanvas id="renderCanvas" style="width: 100%; height: 100%"></canvas>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
    ThEngineService,
  ],
})
export class ThCanvas implements OnInit, AfterViewInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas?: ElementRef<HTMLCanvasElement>;
  public static cnt = 0;

  private globalView: ThView = new ThView();
  constructor(private engServ: ThEngineService) {
    console.log('canvas ' + ThCanvas.cnt++);
  }
  ngAfterViewInit(): void {
    this.engServ.requestAnimationFrame();
  }

  @Output()
  public get onRender() {
    return this.engServ.onRender;
  }

  public ngOnInit(): void {
    this.engServ.setCanvas(this.rendererCanvas?.nativeElement!);
    this.engServ.addView(this.globalView);
  }

  public get obj() {
    return this;
  }

  /**
   * add a Scene
   * @param scene
   */
  add(scene: Object3D) {
    // nothing to do here
  }

  /**
   * remove a Scene
   * @param scene
   */
  remove(scene: Object3D) {
    // norhing to do
  }

  @ContentChild(ThScene)
  public set scene(scene: ThScene) {
    this.globalView.scene = scene;
  }

  @ContentChild(ThCamera)
  public set camera(camera: ThCamera) {
    this.globalView.camera = camera;
  }

  @ContentChildren(ThView)
  public set views(viewList: QueryList<ThView>) {
    viewList.forEach((v) => this.engServ.addView(v));
  }
}
