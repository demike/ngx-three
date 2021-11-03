import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { RaycasterService } from './events/raycaster.service';

import { ThObject3D } from './generated/ThObject3D';

import { ThEngineService } from './ThEngine.service';
import { ThView } from './ThView';

@Component({
  selector: 'th-canvas',
  styleUrls: ['./ThCanvas.scss'],
  template: '<canvas #rendererCanvas id="rendererCanvas" style="width: 100%; height: 100%"></canvas>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
    ThEngineService,
    forwardRef(() => RaycasterService),
    { provide: ThView, useExisting: forwardRef(() => ThCanvas) }
  ]
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThCanvas extends ThView implements OnInit, AfterViewInit {
  private static instanceCnt = 0;
  public readonly nid = ThCanvas.instanceCnt++;

  @Input()
  public set shadow(enable: boolean) {
    this.engServ.shadow = enable;
  }

  public get shadow() {
    return this.engServ.shadow;
  }

  /**
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
    this.engServ.setCanvas(canvas.nativeElement);
  }

  public get rendererCanvas() {
    return this._rendererCanvas;
  }

  constructor(
    protected engServ: ThEngineService,
    @Inject(forwardRef(() => RaycasterService))
    protected raycaster: RaycasterService
  ) {
    super(engServ, raycaster);
    console.log('canvas ' + this.nid);
  }

  ngAfterViewInit(): void {
    this.engServ.requestAnimationFrame();
  }

  public ngOnInit(): void {
    if (!this.rendererCanvas) {
      throw new Error('Missing Canvas');
    }
    this.engServ.setCanvas(this.rendererCanvas.nativeElement);

    super.ngOnInit();
    if (!this.disableDefaultView) {
      this.engServ.addView(this);
    }
  }
}
