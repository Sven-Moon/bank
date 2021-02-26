import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountComponent } from './account/account.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AccountsEffects } from 'src/app/store/effects/accounts.effects';
import { StoreModule } from '@ngrx/store';
import * as fromAccounts from 'src/app/store/reducers/accounts.reducer'
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountComponent,
    AccountAddComponent,
    AccountEditComponent,
    AccountsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AccountsRoutingModule,
    RouterModule,
    StoreModule
      .forFeature(fromAccounts.accountFeatureKey, fromAccounts.reducer),
    EffectsModule.forFeature([AccountsEffects])
  ]
})
export class AccountsModule { }
