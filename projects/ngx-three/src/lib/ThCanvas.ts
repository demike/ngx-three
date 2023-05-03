import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  isDevMode,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import { Raycaster, WebGLRenderer } from 'three';
import { RAYCASTER, RaycasterService } from './events/raycaster.service';
import { ThObject3D } from './generated/ThObject3D';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThEngineService } from './ThEngine.service';
import { ThView } from './ThView';

@Component({
  selector: 'th-canvas',
  styleUrls: ['./ThCanvas.scss'],
  template: '<canvas #rendererCanvas id="rendererCanvas"><ng-content *ngIf="isDevMode()" ></ng-content></canvas>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
    ThEngineService,
    ThAnimationLoopService,
    { provide: RAYCASTER, useValue: new Raycaster() },
    forwardRef(() => RaycasterService),
    { provide: ThView, useExisting: forwardRef(() => ThCanvas) }
  ]
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThCanvas extends ThView implements OnInit, AfterViewInit, AfterContentChecked {
  public readonly isDevMode = isDevMode;
  private static instanceCnt = 0;
  public readonly nid = ThCanvas.instanceCnt++;

  /**
   * renderer parameters
   * those will be applied to the renderer during construction / initialization
   */
  @Input()
  rendererParameters?: Partial<WebGLRenderer>;

  /**
   * if true does not use the ThCanvas as view
   * this is esepcially usefull if you have multiple views
   * and want to iterate over all of them with *ngFor
   * use statically (before ngOnInit is triggered)
   */
  @Input()
  public disableDefaultView = false;

  public get obj() {
    return this;
  }

  @ContentChildren(ThView)
  public set views(viewList: QueryList<ThView>) {
    viewList.forEach((v) => this.engServ.addView(v));
  }

  protected _rendererCanvas?: ElementRef<HTMLCanvasElement>;
  @ViewChild('rendererCanvas', { static: true })
  public set rendererCanvas(canvas: ElementRef<HTMLCanvasElement> | undefined) {
    if (!canvas) {
      return;
    }
    this._rendererCanvas = canvas;
    canvas.nativeElement.id += this.nid;
  }

  public get rendererCanvas() {
    return this._rendererCanvas;
  }

  constructor(
    protected engServ: ThEngineService,
    protected animationLoop: ThAnimationLoopService,
    @Inject(forwardRef(() => RaycasterService))
    protected raycaster: RaycasterService
  ) {
    super(engServ, raycaster);
  }
  ngAfterContentChecked(): void {
    this.animationLoop.requestAnimationFrame();
  }

  ngAfterViewInit(): void {
    this.animationLoop.requestAnimationFrame();
  }

  public ngOnInit(): void {
    this.applyRendererParameters();

    super.ngOnInit();
    if (!this.disableDefaultView) {
      this.engServ.addView(this);
    }
  }

  private applyRendererParameters() {
    if (!this.rendererCanvas) {
      throw new Error('Missing Canvas');
    }

    this.engServ.setRenderer({ ...this.rendererParameters, domElement: this.rendererCanvas.nativeElement });
  }
}
