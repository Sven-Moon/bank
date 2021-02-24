import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './acounts-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AppComponents } from './components/app-components';
import { environment } from 'src/environments/environment';
import { AccountService } from './services/account.service';
import * as fromAccountState from "./store/reducers/accounts.reducer"
import { EffectsModule } from '@ngrx/effects';
import { AccountsEffects } from './store/effects/accounts.effects';
import { accountsReducers } from './store/reducers/accounts.reducer';

@NgModule({
  declarations: [
    ...AppComponents
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forFeature(
      fromAccountState.accountStateFeatureKey,
      accountsReducers,
      { metaReducers: fromAccountState.metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    RouterModule,
    EffectsModule.forFeature([AccountsEffects])
  ],
  providers: [AccountService],
  exports: [ AccountComponent ]
})
export class AccountsModule { }
