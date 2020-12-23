import { createFeatureSelector, createSelector } from '@ngrx/store';
import { accountsFeatureKey, AccountState, selectAll } from './account.reducer';

export const selectAccountState = 
  createFeatureSelector<AccountState>(accountsFeatureKey);

export const selectAccounts = createSelector(
  selectAccountState,
  selectAll
);

export const selectedAccount = createSelector(
  selectAccountState,
  (state: AccountState) => state.selectedAccount
);