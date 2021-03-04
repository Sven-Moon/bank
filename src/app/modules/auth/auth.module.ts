import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthLinksComponent } from './auth-links/auth-links.component';
import { LoginModalComponent } from './login-modal/login-modal.component';


@NgModule({
  declarations: [LoginComponent, AuthLinksComponent, LoginModalComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
