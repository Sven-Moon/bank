import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromActions from "../../store/account.actions"
import { AccountState } from '../../store/account.reducer';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { selectAccounts } from '../../store/account.selectors';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  // accounts$: Observable<Account[]>;
  accounts$: Observable<Account[]>;

  constructor(
    private accountService: AccountService,
    public router: Router,
    private store: Store<AccountState>
  ) { }

  ngOnInit(): void {
    // kickoff the loadAccounts 
    // action > effect > action > reducer cascade
    this.store.dispatch(fromActions.loadAccounts())
    // call loadAccounts to get the info from the store
    this.loadAccounts();
  }

  loadAccounts() {
    // this observable just looks at the Accounts part of the store
    this.accounts$ = this.store.pipe(select(selectAccounts));
  }

  deleteAccount(id: string) {
    this.store.dispatch(fromActions.deleteAccount({ id }))
  }
}