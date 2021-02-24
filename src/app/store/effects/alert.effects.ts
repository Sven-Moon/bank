import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AlertService } from "ngx-alerts";
import { tap } from "rxjs/operators";
import { deleteAccountSuccess } from "src/app/accounts/store/actions/accounts.actions";

@Injectable()
export class AlertEffects {
  constructor(
    private actions$: Actions,
    private alertService: AlertService
  ) {}
  accountDeleted$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(deleteAccountSuccess),
      tap(() => setTimeout(() => {
          this.alertService
          .info('Account removed from Database');
      }, 1000) )
    ),
    { dispatch: false }
  );
}
