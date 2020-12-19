import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromActions from "../../store/actions/accounts.actions"
import { AccountState, selectAccounts } from '../../store';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  // accounts: Accounts[] = [];
  accounts$: Observable<Account[]>;

  constructor(
    private accountService: AccountService,
    public router: Router,
    private store: Store<AccountState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.loadAccounts())
    this.loadAccounts();
  }

  loadAccounts() {
    // const accountObserver = {
    //   next: accountsObs => {
    //     this.store.dispatch(
    //       fromActions.loadAccountsSuccess({ accounts: accountsObs })
    //     );        
    //     // this.accounts = accountsObs
    //   },
    //   error: err => {
    //     this.store.dispatch(fromActions.loadAccountsFailure({error: err}));
    //     console.error(err)
    //   }
    // }
    // this.accountService.getAccounts().subscribe(accountObserver);
    this.accounts$ = this.store.pipe(select(selectAccounts));
  }


}
