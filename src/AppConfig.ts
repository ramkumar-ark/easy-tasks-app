import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './AppRoutes';

export const AppConfig: ApplicationConfig = {
  providers: [provideRouter(AppRoutes)],
};
