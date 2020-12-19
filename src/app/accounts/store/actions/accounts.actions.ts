import { createAction, props } from '@ngrx/store';
import { Account } from 'src/app/accounts/models/account';

export const loadAccounts = createAction(
  '[Account Effects ] Load Accounts'
);

export const loadAccountsSuccess = createAction(
  '[Account Effects ] Load Accounts Success',
  props<{ accounts: Account[] }>()
);

export const loadAccountsFailure = createAction(
  '[Account Effects ] Load Accounts Failure',
  props<{ error: any }>()
);
