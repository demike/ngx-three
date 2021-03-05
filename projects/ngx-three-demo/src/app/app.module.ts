import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  Box,
  SimpleExampleComponent,
} from './simple-example/simple-example.component';
import { NgxThreeModule } from 'projects/ngx-three/src/public-api';
import { LoaderExampleComponent } from './loader-example/loader-example.component';
import { ControlsExampleComponent } from './controls-example/controls-example.component';
import { EventsExampleComponent } from './events-example/events-example.component';
import { CodeComponent } from './code/code.component';
import { MaterialModule } from './material/material.module';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SimpleExampleComponent,
    Box,
    LoaderExampleComponent,
    ControlsExampleComponent,
    EventsExampleComponent,
    CodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThreeModule,
    MaterialModule,
    //  HighlightModule,
    HighlightPlusModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
