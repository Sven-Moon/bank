import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AccountAddComponent } from './account-add/account-add.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountItemComponent } from './account-item/account-item.component';
import { AccountComponent } from './account/account.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';

const routes: Routes = [
  {path: 'account', component: AccountComponent},
  {path: '', redirectTo: 'account', pathMatch: 'full'},
  {path: 'get/:id', component: AccountItemComponent},
  {path: 'add', component: AccountAddComponent},
  {path: 'edit/:id', component: AccountEditComponent},
  {path: 'list', component: AccountsListComponent},
  // {path: 'details', component: AccountDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
