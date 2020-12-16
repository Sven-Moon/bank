import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Account } from '../models/Account'
import { loadAccountsFailure, loadAccountsSuccess } from './actions/accounts.actions';


export interface State {
  accounts: Account[]; 
  error: any;
}

export const initialState: State = {
  accounts: [],
  error: undefined
}

export const reducers = createReducer(
  initialState,
  on(loadAccountsSuccess, (state,action) => {
    return{
      accounts: action.accounts
    }
  }),
  on(loadAccountsFailure, (state,action) => {
    return{
      accounts: state.accounts,
      error: action.error
    };
  })
);



export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
