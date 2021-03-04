import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/User';

export const loginPage = createAction(
  '[Login Component] Log in User',
  props<{ userName: string, password: string }>()
);

export const loginModal = createAction(
  '[Login Component] Log in User',
  props<{ userName: string, password: string }>()
);

export const loginSuccessful = createAction(
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
