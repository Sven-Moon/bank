import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountsRoutingModule } from './accounts-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponents } from './components/app-components';
import { environment } from 'src/environments/environment';
import { AccountService } from './services/account.service';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/account.effects';
import * as fromAccount from './store/account.reducer';

@NgModule({
  declarations: [
    ...AppComponents
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    StoreModule.forFeature(
      fromAccount.accountsFeatureKey,
      fromAccount.reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [], 
    FormsModule, 
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: environment.production }
      ),
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature(
      fromAccount.accountsFeatureKey, 
      fromAccount.reducer
    ),
    EffectsModule.forFeature([AccountEffects])
  ],
  providers: [AccountService],
  exports: [ ...AppComponents
  ]
})
export class AccountsModule { }