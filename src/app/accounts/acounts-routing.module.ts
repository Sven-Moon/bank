import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {path:'get/:id', component: AccountComponent},
  {path: 'add', component: AccountAddComponent},
  {path: 'edit/:id', component: AccountEditComponent},
  {path: 'list', component: AccountListComponent},
  {path: 'details', component: AccountDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
