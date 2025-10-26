import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MenuHorizontal } from './menu-horizontal/menu-horizontal';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    MenuHorizontal,
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
