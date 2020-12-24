import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Account } from '../models/account';

// ---- LOAD ---- Accounts
export const loadAccounts = createAction(
  '[Account List Component] Load Accounts'
);

export const loadAccountsSuccess = createAction(
  '[Account List Effect] Load Accounts Success', 
  props<{ accounts: Account[] }>()
);

export const loadAccountsFailure = createAction(
  '[Account Effect] Load Accounts Failure', 
  props<{ error: any }>()
);
// ---- LOAD ---- Account
export const loadAccount = createAction(
  '[Account Components] Load Account', 
  props<{ id: string }>()
);

export const loadAccountSuccess = createAction(
  '[Account Effect] Load Account Success', 
  props<{ selectedAccount: Account }>()
);

export const loadAccountFailure = createAction(
  '[Account Effect] Load Account Failure', 
  props<{ error: any }>()
);


// ---- ADD ----
export const addAccount = createAction(
  '[Account Add Component] Add Account', 
  props<{ account: Account }>()
);

export const addAccountSuccess = createAction(
  '[Account Add Effect] Add Account Success', 
  props<{ account: Account }>()
);

export const addAccountFailure = createAction(
  '[Account Add Effect] Add Account Failure', 
  props<{ error: any }>()
);

// ---- EDIT ----
export const updateAccount = createAction(
  '[Account Edit Component] Update Account',
  props<{ account: Update<Account> }>()
);


// ---- OTHER ----

export const addAccounts = createAction(
  '[Account] Add Accounts',
  props<{ accounts: Account[] }>()
);

export const updateAccounts = createAction(
  '[Account/API] Update Accounts',
  props<{ accounts: Update<Account>[] }>()
);

export const deleteAccount = createAction(
  '[Account/API] Delete Account',
  props<{ id: string }>()
);

export const deleteAccounts = createAction(
  '[Account/API] Delete Accounts',
  props<{ ids: string[] }>()
);
