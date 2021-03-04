import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/User';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    password: null,
    isAdmin: null,
    email: null
  },
  error: null
};


export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, (state,action) => ({
      ...state,
      user:  action.user,
      error: null
    })
  ),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    user: null,
    error: action.error
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: {
      id: null,
      password: null,
      isAdmin: null,
      email: null
    },
    error: null
  })),

);

