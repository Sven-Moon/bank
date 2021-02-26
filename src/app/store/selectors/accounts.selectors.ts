import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, accountFeatureKey, adapter } from "../reducers/accounts.reducer";

export const selectAccountsFeature = createFeatureSelector<State>(
  accountFeatureKey
);

export const selectAccounts = createSelector(
  selectAccountsFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectAccountsFeature,
  (state: State) => state.error
);
