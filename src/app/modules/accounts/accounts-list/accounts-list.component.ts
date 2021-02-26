import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromActions from "src/app/store/actions/accounts.actions"
import { State } from 'src/app/store/reducers/accounts.reducer';
import { selectAccounts } from 'src/app/store/selectors/accounts.selectors';
import { AccountService } from 'src/app/modules/accounts/account.service';
import { Observable } from 'rxjs';
import { Account } from 'src/app/modules/accounts/models/account';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  // accounts: Accounts[] = [];
  accounts$: Observable<Account[]>;

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
    this.accounts$ = this.store.pipe(select(selectAccounts));
  }

  public deleteAccount(id:number): void {
    this.store.dispatch(fromActions.deleteAccount({ id }))
  }


}
