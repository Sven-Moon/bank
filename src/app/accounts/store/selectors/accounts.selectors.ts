import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState, accountStateFeatureKey, adapter } from "../reducers/accounts.reducer";

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
