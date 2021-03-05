import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { AppEffects } from './store/effects/app-effects';
import { SharedComponents } from './shared/shared-components';
import { AppComponent } from './shared/app/app.component';
import { AlertModule } from 'ngx-alerts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppModules } from './app-modules';
import { SpinnerEffects } from './store/effects/spinner.effects';
import { RouteEffects } from './store/effects/route.effects';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertEffects } from './store/effects/alert.effects';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [...SharedComponents ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...AppModules,
    StoreModule.forRoot(reducers, { metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      } }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ModalModule.forRoot(),
    AlertModule.forRoot({
      maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top'
    }),
    NgxSpinnerModule,
    EffectsModule.forRoot([
      AlertEffects,
      SpinnerEffects,
      RouteEffects
    ]),
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
