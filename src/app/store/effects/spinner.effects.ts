import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions'



@Injectable()
export class SpinnerEffects {

  spinnerOn$ = createEffect( () =>
    this.actions$.pipe(
      ofType(fromAuthActions.loginModal,fromAuthActions.loginPage),
      tap( () => this.spinner.show() )
    ),
    { dispatch: false }
  )

  spinnerOff$ = createEffect( () =>
    this.actions$.pipe(
      ofType(fromAuthActions.loginFailure,fromAuthActions.loginSuccess),
      tap( () => {
        setTimeout( () =>
          this.spinner.hide(),
          1000)
      })
    ),
    {dispatch:false}
  )

  constructor(
    private actions$: Actions,
    private spinner: NgxSpinnerService
  ) {}

}
