import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromActions from "../../store/actions/accounts.actions"
import { AccountState } from '../../store/reducers/accounts.reducer';
import { selectAccounts } from '../../store/selectors/accounts.selectors';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { RouterModule } from '@angular/router'

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
    this.accounts$ = this.store.pipe(select(selectAccounts));
  }

  public deleteAccount(id:number): void {
    this.store.dispatch(fromActions.deleteAccount({ id }))
  }


}
