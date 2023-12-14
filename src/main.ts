import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NgxsModule.forRoot([], {
        developmentMode: !environment.production,
        selectorOptions: {
          suppressErrors: false,
          injectContainerState: false,
        },
      }),
      NgxsLoggerPluginModule.forRoot({
        collapsed: false,
        disabled: environment.production,
      }),
      NgxsReduxDevtoolsPluginModule.forRoot()
    ),
  ],
}).catch(err => console.error(err));
