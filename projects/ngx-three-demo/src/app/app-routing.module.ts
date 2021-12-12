/* eslint-disable max-len */
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-basic-example-page',
  template: `<app-basic-example class="example-container"></app-basic-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/basic-example/basic-example.component.ts'
      ]"
    >
    </app-code>`
})
export class BasicExamplePageComponent {}

@Component({
  selector: 'app-simple-example-page',
  template: `<app-simple-example class="example-container"></app-simple-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/simple-example/simple-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/simple-example/simple-example.component.ts'
      ]"
    >
    </app-code>`
})
export class SimpleExamplePageComponent {}

@Component({
  selector: 'app-introductory-example-page',
  template: `<app-introductory-example class="example-container"></app-introductory-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/introductory-example/introductory-example.component.ts'
      ]"
    >
    </app-code>`
})
export class IntroductoryExamplePageComponent {}


@Component({
  selector: 'app-controls-example-page',
  template: ` <app-controls-example class="example-container"></app-controls-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/controls-example/controls-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/controls-example/controls-example.component.ts'
      ]"
    >
    </app-code>`
})
export class ControlsExamplePageComponent {}

@Component({
  selector: 'app-loader-example-page',
  template: `<app-loader-example class="example-container"></app-loader-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/loader-example/loader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/loader-example/loader-example.component.ts'
      ]"
    >
    </app-code>`
})
export class LoaderExamplePageComponent {}

@Component({
  selector: 'app-dynamic-loader-example-page',
  template: `<app-dynamic-loader-example class="example-container"></app-dynamic-loader-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/dynamic-loader-example/dynamic-loader-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/dynamic-loader-example/dynamic-loader-example.component.ts'
      ]"
    >
    </app-code>`
})
export class DynamicLoaderExamplePageComponent {}

@Component({
  selector: 'app-events-example-page',
  template: `<app-events-example class="example-container"></app-events-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.scss'
      ]"
    >
    </app-code> `
})
export class EventsExamplePageComponent {}

@Component({
  selector: 'app-instanced-mesh-example-page',
  template: `<app-instanced-mesh-example class="example-container"></app-instanced-mesh-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-mesh-example/instanced-mesh-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/instanced-mesh-example/instanced-mesh-example.component.ts'
      ]"
    >
    </app-code> `
})
export class InstancedMeshExamplePageComponent {}

@Component({
  selector: 'app-post-processing-example-page',
  template: `<app-post-processing-example class="example-container"></app-post-processing-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/post-processing-example/post-processing-example.component.scss'
      ]"
    >
    </app-code> `
})
export class PostProcessingExamplePageComponent {}

@Component({
  selector: 'app-views-example-page',
  template: `<app-views-example class="example-container"></app-views-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/views-example/views-example.component.scss'
      ]"
    >
    </app-code> `
})
export class ViewsExamplePageComponent {}

@Component({
  selector: 'app-multi-scene-example-page',
  template: `<app-multi-scene-example class="example-container"></app-multi-scene-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.ts',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-scene-example/multi-scene-example.component.scss'
      ]"
    >
    </app-code> `
})
export class MultiSceneExamplePageComponent {}

@Component({
  selector: 'app-multi-view-postprocessing-example-page',
  template: `<app-multi-view-postprocessing-example class="example-container"></app-multi-view-postprocessing-example>
    <app-code
      [lineNumbers]="true"
      [codeUrls]="[
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-view-postprocessing-example/multi-view-postprocessing-example.component.html',
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/multi-view-postprocessing-example/multi-view-postprocessing-example.component.ts'
      ]"
    >
    </app-code> `
})
export class MultiViewPostprocessingExamplePageComponent {}

export const EXAMPLE_ROUTES: Routes = [
  { path: 'basic-example', component: BasicExamplePageComponent, data: { title: 'Basic Example' } },
  { path: 'simple-example', component: SimpleExamplePageComponent, data: { title: 'Simple Example' } },
  { path: 'introductory-example', component: IntroductoryExamplePageComponent, data: { title: 'Introductory Example' } },
  { path: 'controls-example', component: ControlsExamplePageComponent, data: { title: 'Controls Example' } },
  { path: 'loader-example', component: LoaderExamplePageComponent, data: { title: 'Loader Example' } },
  { path: 'dynamic loader-example', component: DynamicLoaderExamplePageComponent, data: { title: 'Dynamic Loader Example' } },
  { path: 'events-example', component: EventsExamplePageComponent, data: { title: 'Events Example' } },
  { path: 'instanced-mesh-example', component: InstancedMeshExamplePageComponent, data: { title: 'Instanced Mesh Example' } },
  { path: 'post-processing-example', component: PostProcessingExamplePageComponent, data: { title: 'Post Processing Example' } },
  { path: 'views-example', component: ViewsExamplePageComponent, data: { title: 'Multiple Views Example' } },
  { path: 'multi-scene-example', component: MultiSceneExamplePageComponent, data: { title: 'Multiple Scenes Example' } },
  { path: 'multi-view-postprocessing-example', component: MultiViewPostprocessingExamplePageComponent, data: { title: 'Multiple View Post Processing Example' } }
];

export const exampleDeclarations: any[] = [];
EXAMPLE_ROUTES.forEach((route) => {
  exampleDeclarations.push(route.component);
});

@NgModule({
  imports: [RouterModule.forRoot(EXAMPLE_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
