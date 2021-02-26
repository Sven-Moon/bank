import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store"
import { environment } from "src/environments/environment";
import * as fromAuth from './reducers/auth.reducer'
import * as fromAccounts from './reducers/accounts.reducer'

export interface AppState {

  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromAccounts.accountFeatureKey]: fromAccounts.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromAccounts.accountFeatureKey]: fromAccounts.reducer,
}

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production
  ? [debug]
  : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  }
}
