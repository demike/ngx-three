/* eslint-disable max-len */
import { ChangeDetectionStrategy, Component, NgModule, Type } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AnimationExampleComponent } from './animation-example/animation-example.component';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { ControlsExampleComponent } from './controls-example/controls-example.component';
import { DynamicLoaderExampleComponent } from './dynamic-loader-example/dynamic-loader-example.component';
import { EventsExampleComponent } from './events-example/events-example.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { HtmlExampleComponent } from './html-example/html-example.component';
import { InstancedMeshExampleComponent } from './instanced-mesh-example/instanced-mesh-example.component';
import { Box, IntroductoryExampleComponent } from './introductory-example/introductory-example.component';
import { LoaderExampleComponent } from './loader-example/loader-example.component';
import { MultiSceneExampleComponent } from './multi-scene-example/multi-scene-example.component';
import { MultiViewPostprocessingExampleComponent } from './multi-view-postprocessing-example/multi-view-postprocessing-example.component';
import { OnDemandExampleComponent } from './on-demand-example/on-demand-example.component';
import { OutlinePassEventsExampleComponent } from './outline-pass-events-example/outline-pass-events-example.component';
import { PLYLoaderExampleComponent } from './plyloader-example/plyloader-example.component';
import { PostProcessingExampleComponent } from './post-processing-example/post-processing-example.component';
import { RefByIdExampleComponent } from './ref-by-id-example/ref-by-id-example.component';
import { SimpleExampleComponent } from './simple-example/simple-example.component';
import { ViewsExampleComponent } from './views-example/views-example.component';
import { WebXRExampleComponent } from './webxr-example/webxr-example.component';

export const EXAMPLE_ROUTES: (Route & {
  data: {
    title: string;
    codeUrls: string[];
    exampleComponent: Type<any>;
    declarations?: string[];
  };
})[] = [
  {
    path: 'basic-example',
    data: {
      title: 'Basic Example',
      exampleComponent: BasicExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/basic-example/basic-example.component.ts'
      ]
    }
  },
  {
    path: 'simple-example',
    data: {
      title: 'Simple Example',
      exampleComponent: SimpleExampleComponent,
      declarations: ['SimpleExampleComponent', 'Box'],
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/simple-example/simple-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/simple-example/simple-example.component.ts'
      ]
    }
  },
  {
    path: 'introductory-example',
    data: {
      title: 'Introductory Example',
      exampleComponent: IntroductoryExampleComponent,
      declarations: ['IntroductoryExampleComponent', 'Box'],
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/introductory-example/introductory-example.component.ts'
      ]
    }
  },
  {
    path: 'controls-example',
    data: {
      title: 'Controls Example',
      exampleComponent: ControlsExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/controls-example/controls-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/controls-example/controls-example.component.ts'
      ]
    }
  },
  {
    path: 'loader-example',
    data: {
      title: 'Loader Example',
      exampleComponent: LoaderExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/loader-example/loader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/loader-example/loader-example.component.ts'
      ]
    }
  },
  {
    path: 'dynamic loader-example',
    data: {
      title: 'Dynamic Loader Example',
      exampleComponent: DynamicLoaderExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/dynamic-loader-example/dynamic-loader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/dynamic-loader-example/dynamic-loader-example.component.ts'
      ]
    }
  },
  {
    path: 'events-example',
    data: {
      title: 'Events Example',
      exampleComponent: EventsExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.scss'
      ]
    }
  },
  {
    path: 'instanced-mesh-example',
    data: {
      title: 'Instanced Mesh Example',
      exampleComponent: InstancedMeshExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-mesh-example/instanced-mesh-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-mesh-example/instanced-mesh-example.component.ts'
      ]
    }
  },
  {
    path: 'post-processing-example',
    data: {
      title: 'Post Processing Example',
      exampleComponent: PostProcessingExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.scss'
      ]
    }
  },
  {
    path: 'views-example',
    data: {
      title: 'Multiple Views Example',
      exampleComponent: ViewsExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.scss'
      ]
    }
  },
  {
    path: 'multi-scene-example',
    data: {
      title: 'Multiple Scenes Example',
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.scss'
      ],
      exampleComponent: MultiSceneExampleComponent
    }
  },
  {
    path: 'multi-view-postprocessing-example',
    data: {
      title: 'Multiple View Post Processing Example',
      exampleComponent: MultiViewPostprocessingExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-view-postprocessing-example/multi-view-postprocessing-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-view-postprocessing-example/multi-view-postprocessing-example.component.ts'
      ]
    }
  },
  {
    path: 'animation-example',
    data: {
      title: 'Animation Example',
      exampleComponent: AnimationExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/animation-example/animation-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/animation-example/animation-example.component.ts'
      ]
    }
  },
  /*
  {
    path: 'custom-render-example',
    data: {
      title: 'Custom Render Example (Selective Glow)',
      exampleComponent: CustomRenderExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/custom-render-example/custom-render-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/custom-render-example/custom-render-example.component.ts'
      ]
    }
  },
  */
  {
    path: 'plyloader-example',
    data: {
      title: 'PLY Loader Example',
      exampleComponent: PLYLoaderExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/plyloader-example/plyloader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/plyloader-example/plyloader-example.component.ts'
      ]
    }
  },
  {
    path: 'on-demand-example',
    data: {
      title: 'On-Demand Rendering Example',
      exampleComponent: OnDemandExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/on-demand-example/on-demand-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/on-demand-example/on-demand-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/on-demand-example/on-demand-example.component.scss'
      ]
    }
  },
  {
    path: 'ref-by-id-example',
    data: {
      title: 'Ref By Id Example',
      exampleComponent: RefByIdExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/ref-by-id-example/ref-by-id-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/ref-by-id-example/ref-by-id-example.component.ts',
      ]
    }
  },
  {
    path: 'html-example',
    data: {
      title: 'Html Content Example',
      exampleComponent: HtmlExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/html-example/html-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/html-example/html-example.component.ts',
      ]
    }
  },
  {
    path: 'outline-pass-events-example',
    data: {
      title: 'Render Pass + Events Example',
      exampleComponent: OutlinePassEventsExampleComponent,
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/outline-pass-events-example/outline-pass-events-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/outline-pass-events-example/outline-pass-events-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/outline-pass-events-example/outline-pass-events-example.component.scss',
      ]
    }
  },
  {
    path: 'webxr-example',
    data: {
      title: 'WebXR Example',
      exampleComponent: WebXRExampleComponent,
      declarations: ['WebXRExampleComponent', 'Box'],
      codeUrls: [
        'https://raw.githubusercontent.com/NewYearNewPhil/ngx-three/main/projects/ngx-three-demo/src/app/webxr-example/webxr-example.component.html',
        'https://raw.githubusercontent.com/NewYearNewPhil/ngx-three/main/projects/ngx-three-demo/src/app/webxr-example/webxr-example.component.ts'
      ]
    }
  },
];

EXAMPLE_ROUTES.forEach((route) => (route.component = ExamplePageComponent));

export const exampleDeclarations: any[] = [];
EXAMPLE_ROUTES.forEach((route) => {
  exampleDeclarations.push(route.component);
});

@NgModule({
  imports: [RouterModule.forRoot(EXAMPLE_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
