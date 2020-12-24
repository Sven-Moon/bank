import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AccountService } from '../../services/account.service';
import { loadAccount, updateAccount } from '../../store/account.actions';
import { AccountState } from '../../store/account.reducer';
import { selectedAccount } from '../../store/account.selectors';
import { Account } from "../../models/account";
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private service: AccountService,
    private store: Store<AccountState>
  ) { }
  model: any = {}

  ngOnInit(): void {
    this.store.dispatch(
      loadAccount({id: this.route.snapshot.paramMap.get("id")})
    );

    this.store.pipe(select(selectedAccount))
    .subscribe( 
      //create a new instance of the account and assign it to the model
      // new X() type must be a class for Object.assig() to work
      account => (this.model = Object.assign(new Account(), account))
    );
  }

  onSubmit() {
    const update: Update<Account> = {
      id: this.model.id,
      changes: this.model
    }

    this.store.dispatch(updateAccount({ account: update }))
  }

}
