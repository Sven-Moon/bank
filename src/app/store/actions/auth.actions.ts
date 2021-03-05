import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/User';

export const loginPage = createAction(
  '[Login Component] Log in User',
  props<{ username: string, password: string }>()
);

export const loginModal = createAction(
  '[Login Component, Modal] Log in User',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effects] Login successful',
  props<{ user: User}>()
);

export const loginFailure = createAction(
  '[Auth Effects] Login failed',
  props<{ error: any }>()
);

export const logout = createAction(
  '[Auth Links] Logout User'
);
