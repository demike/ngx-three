import {
  Directive,
  EmbeddedViewRef,
  InjectionToken,
  Injector,
  Input,
  OnChanges,
  Provider,
  SimpleChanges,
  StaticProvider,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CSS3DParameters, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { CSS2DParameters, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

import { Renderer, WebGLRenderer, WebGLRendererParameters } from 'three';

const RENDERER_DEFAULTS: WebGLRendererParameters = {
  alpha: true, // transparent background
  antialias: true, // smooth edges
  preserveDrawingBuffer: true,
};

export type ThRendererParameters = Partial<WebGLRendererParameters>;

export const RENDERER_PROVIDERS = new InjectionToken<Renderer[]>('Renderer Providers');
export const CSS3D_RENDERER = new InjectionToken<CSS3DRenderer>('CSS3DRenderer');
export const CSS2D_RENDERER = new InjectionToken<CSS2DRenderer>('CSS2DRenderer');
export const WEBGL_RENDERER = new InjectionToken<WebGLRenderer>('WebGLRenderer');

@Directive({
  selector:
    // eslint-disable-next-line max-len
    'ng-template[rendererParameters], ng-template[css2dRendererParameters], ng-template[css3dRendererParameters], ng-template[webgpuRendererParameters]',
})
export class RendererProviderDirective implements OnChanges {
  @Input()
  rendererParameters?: ThRendererParameters;

  @Input()
  css3DParameters?: CSS3DParameters;

  @Input()
  css2DParameters?: CSS2DParameters;

  private view?: EmbeddedViewRef<unknown>;
  private injector?: Injector;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>,
    private parentInjector: Injector,
  ) {}

  public getInjectedRenderers() {
    return this.injector?.get(RENDERER_PROVIDERS);
  }

  public ngOnChanges(_changes: SimpleChanges) {
    this.createInjector();
    this.createView();
  }

  private createView() {
    if (this.view) {
      this.viewContainer.clear();
    }

    this.view = this.viewContainer.createEmbeddedView(this.templateRef, undefined, { injector: this.injector });
  }

  private createInjector() {
    const providers: StaticProvider[] = [];
    if (this.rendererParameters) {
      providers.push(provideWebGLRenderer(this.rendererParameters));
    }

    if (this.css3DParameters) {
      providers.push(provideCSS3dRenderer(this.css3DParameters));
    }

    if (this.css2DParameters) {
      providers.push(provideCSS2dRenderer(this.css2DParameters));
    }

    this.injector = Injector.create({
      parent: this.parentInjector,
      providers,
    });
  }
}

export function provideWebGLRenderer(parameters?: ThRendererParameters) {
  const renderer = new WebGLRenderer({ ...RENDERER_DEFAULTS, ...parameters });

  Object.assign(renderer, { ...RENDERER_DEFAULTS, ...parameters });
  const provider: Provider[] = [
    { provide: WEBGL_RENDERER, useValue: renderer },
    {
      provide: RENDERER_PROVIDERS,
      multi: true,
      useExisting: WEBGL_RENDERER,
    },
  ];
  return provider;
}

export function provideCSS3dRenderer(parameters?: CSS3DParameters) {
  const provider: Provider[] = [
    {
      provide: CSS3D_RENDERER,
      useFactory: () => {
        const renderer = new CSS3DRenderer(parameters);
        const style = renderer.domElement.style;
        style.position = 'absolute';
        style.top = '0px';
        style.bottom = '0px';
        style.left = '0px';
        style.right = '0px';
        style.overflow = 'hidden';
        return renderer;
      },
    },
    { provide: RENDERER_PROVIDERS, multi: true, useExisting: CSS3D_RENDERER },
  ];
  return provider;
}

export function provideCSS2dRenderer(parameters?: CSS2DParameters) {
  const provider: Provider[] = [
    {
      provide: CSS2D_RENDERER,
      useFactory: () => {
        const renderer = new CSS2DRenderer(parameters);
        const style = renderer.domElement.style;
        style.position = 'absolute';
        style.top = '0px';
        style.bottom = '0px';
        style.left = '0px';
        style.right = '0px';
        style.overflow = 'hidden';
        return renderer;
      },
    },
    { provide: RENDERER_PROVIDERS, multi: true, useExisting: CSS2D_RENDERER },
  ];
  return provider;
}

export function provideWebGPURenderer(parameters?: WebGLRendererParameters) {
  const provider: Provider[] = [
    { provide: WEBGL_RENDERER, useValue: new WebGLRenderer(parameters) },
    { provide: RENDERER_PROVIDERS, multi: true, useExisting: WEBGL_RENDERER },
  ];
  return provider;
}
