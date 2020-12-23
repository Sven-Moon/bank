import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {path:'detail/:id', component: AccountComponent},
  {path: 'add', component: AccountAddComponent},
  {path: 'edit/:id', component: AccountEditComponent},
  {path: 'list', component: AccountListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }