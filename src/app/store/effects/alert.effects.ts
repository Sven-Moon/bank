import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AlertService } from "ngx-alerts";
import { tap } from "rxjs/operators";
import * as fromAuthActions from '../actions/auth.actions'

@Injectable()
export class AlertEffects {
  constructor(
    private actions$: Actions,
    private alertService: AlertService
  ) {}

  // accountDeleted$ = createEffect(
  //   () =>
  //   this.actions$.pipe(
  //     ofType(deleteAccountSuccess),
  //     tap(() => setTimeout(() => {
  //         this.alertService
  //         .info('Account removed from Database');
  //     }, 1000) )
  //   ),
  //   { dispatch: false }
  // );

  checkingYourInformation$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(fromAuthActions.loginPage, fromAuthActions.loginModal),
      tap(() => this.alertService.info('Just checking your creds!' ))
    ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect( () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap( () => setTimeout( () => {
          this.alertService.success('Welcome back!'),
          1000
        }))
      ),
      {dispatch:false}
  )

  unableToLogIn$ = createEffect( () =>
  this.actions$.pipe(
    ofType(fromAuthActions.loginFailure),
    tap( () => this.alertService.danger('Login unsuccessful'))
  ),
  {dispatch:false}
)
}
