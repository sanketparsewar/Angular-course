import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// as here we are passing appcomponent so appcomponent file gets run
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
