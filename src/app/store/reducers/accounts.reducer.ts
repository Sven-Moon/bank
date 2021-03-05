import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, MetaReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { deleteAccount, deleteAccountFailure, loadAccountsFailure, loadAccountsSuccess } from '../actions/accounts.actions';
import { Account } from 'src/app/modules/accounts/models/account'
import { state } from '@angular/animations';

export const accountFeatureKey = "account";

export interface State extends EntityState<Account> {
  selectedId: number;
  error: any;
}

export function selectId(a: Account): number {
  return a.id;
}

export const adapter: EntityAdapter<Account> = createEntityAdapter<Account>(
  { selectId: selectId }
);

export const initialState: State = adapter.getInitialState({
    selectedId: null,
    error: undefined
  });

// ------ REDUCER ------
export const reducer = createReducer(
  initialState,
  on(loadAccountsSuccess, (state,action) =>
    adapter.setAll(action.accounts,state)
  ),
    on(deleteAccount, (state,action) =>
    adapter.removeOne(action.id, state)
  ),
  on(loadAccountsFailure, deleteAccountFailure, (state, action) => (
     {...state, error: action.error}
  )),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
