import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { AppRoutes } from './AppRoutes';

export const AppConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      AppRoutes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
  ],
};
