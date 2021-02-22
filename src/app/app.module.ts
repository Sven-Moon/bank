import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './accounts/components/app/app.component';
import { AppComponents } from './accounts/components/app-components';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccountsModule } from './accounts/accounts.module';
import { HomeComponent } from './pages/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './reducers/app.effects';

@NgModule({
  declarations: [AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      } }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    RouterModule,
    AccountsModule,
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
