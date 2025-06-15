import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { AppConfig } from './AppConfig';

bootstrapApplication(AppComponent, AppConfig).catch((err) =>
  console.error(err)
);
