/* eslint-disable max-len */
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
        'https://raw.githubusercontent.com/demike/ngx-three/main/projects/ngx-three-demo/src/app/events-example/events-example.component.ts'
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

export const EXAMPLE_ROUTES: Routes = [
  { path: 'simple-example', component: SimpleExamplePageComponent, data: { title: 'Simple Example' } },
  { path: 'controls-example', component: ControlsExamplePageComponent, data: { title: 'Controls Example' } },
  { path: 'loader-example', component: LoaderExamplePageComponent, data: { title: 'Loader Example' } },
  { path: 'dynamic loader-example', component: DynamicLoaderExamplePageComponent, data: { title: 'Dynamic Loader Example' } },
  { path: 'events-example', component: EventsExamplePageComponent, data: { title: 'Events Example' } },
  { path: 'instanced-mesh-example', component: InstancedMeshExamplePageComponent, data: { title: 'Instanced Mesh Example' } }
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
