import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-simple-example-page',
  template: ` <app-simple-example></app-simple-example> `
})
export class SimpleExamplePageComponent {}

@Component({
  selector: 'app-controls-example-page',
  template: ` <app-controls-example></app-controls-example> `
})
export class ControlsExamplePageComponent {}

@Component({
  selector: 'app-loader-example-page',
  template: ` <app-loader-example></app-loader-example> `
})
export class LoaderExamplePageComponent {}

@Component({
  selector: 'app-dynamic-loader-example-page',
  template: ` <app-dynamic-loader-example></app-dynamic-loader-example> `
})
export class DynamicLoaderExamplePageComponent {}

@Component({
  selector: 'app-events-example-page',
  template: ` <app-events-example></app-events-example> `
})
export class EventsExamplePageComponent {}

@Component({
  selector: 'app-instanced-mesh-example-page',
  template: ` <app-instanced-mesh-example></app-instanced-mesh-example> `
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
