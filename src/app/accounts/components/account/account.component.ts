import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';
import { AccountState } from '../../store/account.reducer';
import { select, Store } from '@ngrx/store';
import * as fromActions from '../../store/account.actions';
import { selectedAccount } from '../../store/account.selectors';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  account$: Observable<Account>;

  constructor(
    private service: AccountService,
    public router: Router,
    private route: ActivatedRoute,
    private store: Store<AccountState>
  ) { }

  ngOnInit() {
    this.store.dispatch(fromActions.loadAccount({
      id: this.route.snapshot.paramMap.get("id")
    }))
    this.account$ = this.store.pipe(select(selectedAccount))
  }

  deleteAccount(id: string) {
    this.store.dispatch(fromActions.deleteAccount({ id }))
  }

}