import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccountsModule } from './modules/accounts/accounts.module';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { AppEffects } from './store/effects/app-effects';
import { SharedComponents } from './shared/shared-components';
import { AppComponent } from './app/app.component';
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [
    AppComponent,
    ...SharedComponents
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      } }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    AccountsModule,
    HttpClientModule,
    AlertModule.forRoot({
      maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top'
    }),
    RouterModule,
    EffectsModule.forRoot(AppEffects),
    AppRoutingModule // listed AFTER any other modules with routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
