import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { AppComponent, AppRoutes, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(AppRoutes)
]);

