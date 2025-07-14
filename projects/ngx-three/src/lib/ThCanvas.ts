import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  inject,
  Input,
  isDevMode,
  OnInit,
  QueryList,
  StaticProvider,
} from '@angular/core';
import { Raycaster, WebGLRenderer } from 'three';
import { RAYCASTER, RaycasterService } from './events/raycaster.service';
import { ThObject3D } from './generated/ThObject3D';
import { ThAnimationLoopService } from './renderer/th-animation-loop.service';
import { ThEngineService } from './ThEngine.service';
import { HOST_ELEMENT, ThView } from './ThView';
import { provideWebGLRenderer, RENDERER_PROVIDERS, WEBGL_RENDERER } from './renderer/renderer-providers';

function provideDefaultRenderer(): StaticProvider[] {
  return [
    {
      provide: RENDERER_PROVIDERS,
      useFactory: () => {
        const renderers = inject(RENDERER_PROVIDERS, { skipSelf: true, optional: true });
        if (renderers) {
          return renderers;
        }
        return [(provideWebGLRenderer()[0] as any).useValue];
      },
    },
    {
      provide: WEBGL_RENDERER,
      useFactory: () => {
        const webGlRenderer = inject(WEBGL_RENDERER, { skipSelf: true, optional: true });
        if (webGlRenderer) {
          return webGlRenderer;
        }
        const renderers = inject(RENDERER_PROVIDERS);
        const renderer = renderers[0];
        if (renderers.length === 1 && renderer instanceof WebGLRenderer) {
          return renderer;
        }

        return undefined;
      },
    },
  ];
}

@Component({
  selector: 'th-canvas',
  styleUrls: ['./ThCanvas.scss'],
  template: '@if (isDevMode()) {<ng-content ></ng-content>}',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: HOST_ELEMENT, useFactory: () => inject(ElementRef) },
    { provide: ThObject3D, useExisting: forwardRef(() => ThCanvas) },
    ThEngineService,
    ThAnimationLoopService,
    { provide: RAYCASTER, useValue: new Raycaster() },
    forwardRef(() => RaycasterService),
    { provide: ThView, useExisting: forwardRef(() => ThCanvas) },
    // default provider for webgl renderer
    provideDefaultRenderer(),
  ],
  standalone: false,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThCanvas extends ThView implements OnInit, AfterViewInit, AfterContentChecked {
  protected engServ = inject(ThEngineService);
  protected raycaster = inject(RaycasterService);
  protected animationLoop = inject(ThAnimationLoopService);
  readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  public readonly isDevMode = isDevMode;
  private static instanceCnt = 0;
  public readonly nid = ThCanvas.instanceCnt++;

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
    this.setViews(viewList);
  }

  public get rendererCanvas() {
    return this.engServ.canvas;
  }

  constructor() {
    super();
    this.engServ.renderers.forEach((renderer) => this.elementRef.nativeElement.appendChild(renderer.domElement));
  }
  ngAfterContentChecked(): void {
    this.animationLoop.requestAnimationFrame();
  }

  ngAfterViewInit(): void {
    this.animationLoop.requestAnimationFrame();
  }

  public ngOnInit(): void {
    this.engServ.resize();

    super.ngOnInit();
    this.setViews();
  }

  protected setViews(viewList?: QueryList<ThView>) {
    this.engServ.setViews([]);
    if (!this.disableDefaultView) {
      this.engServ.addView(this);
    }
    viewList?.forEach((v) => this.engServ.addView(v));
  }
}
