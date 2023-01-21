import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Box, SimpleExampleComponent } from './simple-example/simple-example.component';
import { NgxThreeModule } from 'ngx-three';
import { LoaderExampleComponent } from './loader-example/loader-example.component';
import { ControlsExampleComponent } from './controls-example/controls-example.component';
import { EventsExampleComponent } from './events-example/events-example.component';
import { CodeComponent } from './code/code.component';
import { MaterialModule } from './material/material.module';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicLoaderExampleComponent } from './dynamic-loader-example/dynamic-loader-example.component';
import { InstancedMeshExampleComponent } from './instanced-mesh-example/instanced-mesh-example.component';
import { NavigationShellComponent } from './navigation-shell/navigation-shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PostProcessingExampleComponent } from './post-processing-example/post-processing-example.component';
import { FormsModule } from '@angular/forms';
import { ViewsExampleComponent } from './views-example/views-example.component';
import { MultiSceneExampleComponent } from './multi-scene-example/multi-scene-example.component';
import { EditorService } from './code/EditorService';
import { BasicExampleComponent } from './basic-example/basic-example.component';
import { IntroductoryExampleComponent, Box as IntroBox } from './introductory-example/introductory-example.component';
import { MultiViewPostprocessingExampleComponent } from './multi-view-postprocessing-example/multi-view-postprocessing-example.component';
import { AnimationExampleComponent } from './animation-example/animation-example.component';
import { RobotComponent } from './animation-example/robot.component';
import { PLYLoaderExampleComponent } from './plyloader-example/plyloader-example.component';
import { ExamplePageComponent } from './example-page/example-page.component';
import { OnDemandExampleComponent } from './on-demand-example/on-demand-example.component';
import { RefByIdExampleComponent } from './ref-by-id-example/ref-by-id-example.component';
import { HtmlExampleComponent } from './html-example/html-example.component';

@NgModule({
  declarations: [
    AppComponent,
    Box,
    IntroBox,
    BasicExampleComponent,
    SimpleExampleComponent,
    IntroductoryExampleComponent,
    LoaderExampleComponent,
    ControlsExampleComponent,
    EventsExampleComponent,
    CodeComponent,
    DynamicLoaderExampleComponent,
    InstancedMeshExampleComponent,
    PostProcessingExampleComponent,
    NavigationShellComponent,
    ViewsExampleComponent,
    MultiSceneExampleComponent,
    MultiViewPostprocessingExampleComponent,
    //
    AnimationExampleComponent,
    RobotComponent,
    //    CustomRenderExampleComponent,
    //    CustomRenderExamplePageComponent,
    PLYLoaderExampleComponent,
    ExamplePageComponent,
    OnDemandExampleComponent,
    RefByIdExampleComponent,
    HtmlExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThreeModule,
    MaterialModule,
    FormsModule,
    //  HighlightModule,
    HighlightPlusModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    },
    EditorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
