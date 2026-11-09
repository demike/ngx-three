/* eslint-disable max-len */
import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { ExamplePageComponent } from './example-page/example-page.component';

export const EXAMPLE_ROUTES: (Route & {
  data: {
    title: string;
    codeUrls: string[];
    /** lazily loads the example component, resolved into `data.exampleComponent` */
    loadExample: () => Promise<Type<any>>;
    declarations?: string[];
  };
})[] = [
  {
    path: 'basic-example',
    data: {
      title: 'Basic Example',
      loadExample: () => import('./basic-example/basic-example.component').then((m) => m.BasicExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/basic-example/basic-example.component.ts',
      ],
    },
  },
  {
    path: 'simple-example',
    data: {
      title: 'Simple Example',
      loadExample: () => import('./simple-example/simple-example.component').then((m) => m.SimpleExampleComponent),
      declarations: ['SimpleExampleComponent', 'Box'],
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/simple-example/simple-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/simple-example/simple-example.component.ts',
      ],
    },
  },
  {
    path: 'introductory-example',
    data: {
      title: 'Introductory Example',
      loadExample: () => import('./introductory-example/introductory-example.component').then((m) => m.IntroductoryExampleComponent),
      declarations: ['IntroductoryExampleComponent', 'Box'],
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/introductory-example/introductory-example.component.ts',
      ],
    },
  },
  {
    path: 'controls-example',
    data: {
      title: 'Controls Example',
      loadExample: () => import('./controls-example/controls-example.component').then((m) => m.ControlsExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/controls-example/controls-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/controls-example/controls-example.component.ts',
      ],
    },
  },
  {
    path: 'loader-example',
    data: {
      title: 'Loader Example',
      loadExample: () => import('./loader-example/loader-example.component').then((m) => m.LoaderExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/loader-example/loader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/loader-example/loader-example.component.ts',
      ],
    },
  },
  {
    path: 'dynamic loader-example',
    data: {
      title: 'Dynamic Loader Example',
      loadExample: () => import('./dynamic-loader-example/dynamic-loader-example.component').then((m) => m.DynamicLoaderExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/dynamic-loader-example/dynamic-loader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/dynamic-loader-example/dynamic-loader-example.component.ts',
      ],
    },
  },
  {
    path: 'events-example',
    data: {
      title: 'Events Example',
      loadExample: () => import('./events-example/events-example.component').then((m) => m.EventsExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.scss',
      ],
    },
  },
  {
    path: 'instanced-mesh-example',
    data: {
      title: 'Instanced Mesh Example',
      loadExample: () => import('./instanced-mesh-example/instanced-mesh-example.component').then((m) => m.InstancedMeshExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-mesh-example/instanced-mesh-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-mesh-example/instanced-mesh-example.component.ts',
      ],
    },
  },
  {
    path: 'post-processing-example',
    data: {
      title: 'Post Processing Example',
      loadExample: () => import('./post-processing-example/post-processing-example.component').then((m) => m.PostProcessingExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.scss',
      ],
    },
  },
  {
    path: 'views-example',
    data: {
      title: 'Multiple Views Example',
      loadExample: () => import('./views-example/views-example.component').then((m) => m.ViewsExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.scss',
      ],
    },
  },
  {
    path: 'multi-scene-example',
    data: {
      title: 'Multiple Scenes Example',
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.scss',
      ],
      loadExample: () => import('./multi-scene-example/multi-scene-example.component').then((m) => m.MultiSceneExampleComponent),
    },
  },
  {
    path: 'multi-view-postprocessing-example',
    data: {
      title: 'Multiple View Post Processing Example',
      loadExample: () => import('./multi-view-postprocessing-example/multi-view-postprocessing-example.component').then((m) => m.MultiViewPostprocessingExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-view-postprocessing-example/multi-view-postprocessing-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-view-postprocessing-example/multi-view-postprocessing-example.component.ts',
      ],
    },
  },
  {
    path: 'animation-example',
    data: {
      title: 'Animation Example',
      loadExample: () => import('./animation-example/animation-example.component').then((m) => m.AnimationExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/animation-example/animation-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/animation-example/animation-example.component.ts',
      ],
    },
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
      loadExample: () => import('./plyloader-example/plyloader-example.component').then((m) => m.PLYLoaderExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/plyloader-example/plyloader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/plyloader-example/plyloader-example.component.ts',
      ],
    },
  },
  {
    path: 'on-demand-example',
    data: {
      title: 'On-Demand Rendering Example',
      loadExample: () => import('./on-demand-example/on-demand-example.component').then((m) => m.OnDemandExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/on-demand-example/on-demand-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/on-demand-example/on-demand-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/on-demand-example/on-demand-example.component.scss',
      ],
    },
  },
  {
    path: 'ref-by-id-example',
    data: {
      title: 'Ref By Id Example',
      loadExample: () => import('./ref-by-id-example/ref-by-id-example.component').then((m) => m.RefByIdExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/ref-by-id-example/ref-by-id-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/ref-by-id-example/ref-by-id-example.component.ts',
      ],
    },
  },
  {
    path: 'html-example',
    data: {
      title: 'Html Content Example',
      loadExample: () => import('./html-example/html-example.component').then((m) => m.HtmlExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/html-example/html-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/html-example/html-example.component.ts',
      ],
    },
  },
  {
    path: 'outline-pass-events-example',
    data: {
      title: 'Render Pass + Events Example',
      loadExample: () => import('./outline-pass-events-example/outline-pass-events-example.component').then((m) => m.OutlinePassEventsExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/outline-pass-events-example/outline-pass-events-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/outline-pass-events-example/outline-pass-events-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/outline-pass-events-example/outline-pass-events-example.component.scss',
      ],
    },
  },
  {
    path: 'multi-renderer-example',
    data: {
      title: 'Multi Renderer Example: WebGL + CSS2D',
      loadExample: () => import('./multi-renderer-example/multi-renderer-example.component').then((m) => m.MultiRendererExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-renderer-example/multi-renderer-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-renderer-example/multi-renderer-example.component.ts',
      ],
    },
  },
  {
    path: 'css3d-renderer-example',
    data: {
      title: 'CSS3D Renderer Example',
      loadExample: () => import('./css3d-renderer-example/css3d-renderer-example.component').then((m) => m.CSS3dRendererExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/css3d-renderer-example/css3d-renderer-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/css3d-renderer-example/css3d-renderer-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/css3d-renderer-example/css3d-renderer-example.component.scss',
      ],
    },
  },
  {
    path: 'html-with-css3d-example',
    data: {
      title: 'Html with CSS3D Example',
      loadExample: () => import('./html-with-css3d-example/html-with-css3d-example.component').then((m) => m.HtmlWithCSS3dExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/html-with-css3d-example/html-with-css3d-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/html-with-css3d-example/html-with-css3d-example.component.ts',
      ],
    },
  },
  {
    path: 'lod-example',
    data: {
      title: 'LOD Example',
      loadExample: () => import('./lod-example/lod-example.component').then((m) => m.LODExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/lod-example/lod-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/lod-example/lod-example.component.ts',
      ],
    },
  },
  {
    path: 'instanced-glb-example',
    data: {
      title: 'Instanced GLB Example',
      loadExample: () => import('./instanced-glb-example/instanced-glb-example.component').then((m) => m.InstancedGLBExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-glb-example/instanced-glb-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-glb-example/instanced-glb-example.component.ts',
      ],
    },
  },
  {
    path: 'webgpu-fog-example',
    data: {
      title: 'WebGPU Fog Example',
      loadExample: () => import('./webgpu/fog-example.component').then((m) => m.FogExampleComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/webgpu/fog-example.component.ts',
      ],
    },
  },
  {
    path: 'webgpu-benchmark-example',
    data: {
      title: 'WebGPU vs WebGL Benchmark',
      loadExample: () => import('./webgpu/webgpu-benchmark.component').then((m) => m.WebgpuBenchmarkComponent),
      codeUrls: [
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/webgpu/webgpu-benchmark.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/webgpu/benchmark-scene.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/webgpu/benchmark-webgpu.component.ts',
      ],
    },
  },
];

EXAMPLE_ROUTES.forEach((route) => {
  route.component = ExamplePageComponent;
  // examples are loaded lazily, the resolved component ends up in `route.snapshot.data.exampleComponent`
  route.resolve = { exampleComponent: route.data.loadExample };
});

export const exampleDeclarations: any[] = [];
EXAMPLE_ROUTES.forEach((route) => {
  exampleDeclarations.push(route.component);
});
