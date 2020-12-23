import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountService } from '../services/account.service';
import * as fromAccountActions from '../store/account.actions';



@Injectable()
export class AccountEffects {

  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAccountActions.loadAccounts),
      mergeMap(action =>
        this.accountService.getAccounts().pipe(
          map(accounts => 
            fromAccountActions.loadAccountsSuccess({ accounts })),
          catchError(error => 
            of(fromAccountActions.loadAccountsFailure({ error }))
          )        )      )    )  );

  loadAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAccountActions.loadAccount),
      mergeMap(action =>
        this.accountService.getAccount(action.id).pipe(
          map(account =>
            fromAccountActions
            .loadAccountSuccess({ selectedAccount: account })
          ),
          catchError(error =>
            of(fromAccountActions.loadAccountFailure({ error }))
          )        )      )    )  );
  
  updateAccount = createEffect(() => 
    this.actions$.pipe(
      ofType(fromAccountActions.updateAccount),
      concatMap(action => 
        this.accountService.editAccount(
          action.account.id,
          action.account.changes)      ),
    tap(() => this.router.navigate(['/account/list']))),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private router: Router ) {}

}
