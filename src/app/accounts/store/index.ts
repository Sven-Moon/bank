import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Account } from '../models/account'
import { loadAccountsFailure, loadAccountsSuccess } from './actions/accounts.actions';

export const accountStateFeatureKey = "accountState";

export interface AccountState extends EntityState<Account> {
  selectedAccountId: number;
  error: any;
}

export function selectAccountId(a: Account): number {
  return a.accountId;
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>(
  {selectId: selectAccountId}
);

export const initialState = adapter.getInitialState({
    error: undefined
  });

// ------ REDUCER ------
export const reducers = createReducer(
  initialState,
  on(loadAccountsSuccess, (state,action) => {
    return adapter.setAll(action.accounts,state);
  }),
  on(loadAccountsFailure, (action) => {
    return{ error: action.error    };
  })
);

// ------ SELECTOR ------
export const selectAccountsFeature = createFeatureSelector<AccountState>(
  accountStateFeatureKey
);

export const selectAccounts = createSelector(
  selectAccountsFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectAccountsFeature,
  (state: AccountState) => state.error
);

export const metaReducers: MetaReducer<AccountState>[] = !environment.production ? [] : [];
