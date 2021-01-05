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

  createAccount$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromAccountActions.addAccount),
        mergeMap(action => 
        this.accountService.createAccount(action.account).pipe(
          map(account => fromAccountActions.addAccountSuccess({ account })),
          catchError(error => 
            of(fromAccountActions.addAccountFailure({ error })))
        )),
      tap(() => this.router.navigate(["/account/list"]))
    ));
  
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

  deleteAccount$ = createEffect(() => 
    this.actions$.pipe(
      ofType(fromAccountActions.deleteAccount),
      mergeMap(action => 
        this.accountService.deleteAccount(action.id).pipe(
          map(() =>fromAccountActions.deleteAccountSuccess({ id: action.id })),
          catchError(error => 
            of(fromAccountActions.deleteAccountFailure({ error })))
        ))    )  );

  constructor(
    private actions$: Actions,
    private accountService: AccountService,
    private router: Router ) {}

}
