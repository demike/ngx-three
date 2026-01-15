import { enableProdMode, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHighlightOptions } from 'ngx-highlightjs';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { EXAMPLE_ROUTES } from './app/app-routing';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
    provideRouter(EXAMPLE_ROUTES),
  ],
}).catch((err) => console.error(err));
