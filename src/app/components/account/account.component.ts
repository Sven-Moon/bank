import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Account } from 'src/app/models/Account';
import { Accounts } from 'src/app/models/Accounts';
import { State } from 'src/app/reducers/index12';
import { AccountService } from 'src/app/services/account.service';
import * as fromActions from "../../reducers/actions/accounts.actions"

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accounts: Accounts[] = [];

  constructor(
    private accountService: AccountService,
    public router: Router,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadAccounts())
    this.loadAccounts();
  }

  loadAccounts() {
    const accountObserver = {
      next: accountsObs => {
        this.store.dispatch(
          fromActions.loadAccountsSuccess({ accounts: accountsObs })
        );        
        this.accounts = accountsObs
        console.log('[component loadAccounts()]');
        console.log(this.accounts)
      },
      error: err => {
        this.store.dispatch(fromActions.loadAccountsFailure({error: err}));
        console.error(err)
      }
    }
    this.accountService.getAccounts().subscribe(accountObserver);
  }


}
