import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthLinksComponent } from './auth-links/auth-links.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import * as fromAuth from '../../store/reducers/auth.reducer'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/store/effects/auth.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, AuthLinksComponent, LoginModalComponent, AuthLinksComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    FormsModule
  ],
  exports: [AuthLinksComponent]
})
export class AuthModule { }
