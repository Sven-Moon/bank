import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { AccountService } from '../../services/account.service';
import * as fromAccountActions from '../actions/accounts.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';



@Injectable()
export class AccountsEffects {

  constructor(
    private actions$: Actions, 
    private accountService: AccountService
  ) {}

  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAccountActions.loadAccounts),
      mergeMap(() => 
      this.accountService.getAccounts().pipe(
        map(accounts => fromAccountActions.loadAccountsSuccess({ accounts })), 
        catchError(error => 
          of(fromAccountActions.loadAccountsFailure({ error })) 
        )
      ))
    )
  )

 }
