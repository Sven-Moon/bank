import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './shared/core/core.component';

const routes: Routes = [
  {
    path:'',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/pages/pages.module')
          .then((m) => m.PagesModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module')
          .then((m) => m.AuthModule)
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./modules/accounts/accounts.module')
          .then((m) => m.AccountsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
