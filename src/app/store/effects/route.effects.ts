import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { loginSuccess } from '../actions/auth.actions';



@Injectable()
export class RouteEffects {

  goToAccounts$ = createEffect( () =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap( () => this.route.navigate(['/accounts/account']))
    ),
    { dispatch: false }
  )

  constructor(private actions$: Actions, private route: Router) {}

}
