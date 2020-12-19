import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailComponent } from './accounts/components/account-detail/account-detail.component';
import { AccountComponent } from './accounts/components/account/account.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'accounts', 
  loadChildren: "../app/accounts/accounts.module#AccountsModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
