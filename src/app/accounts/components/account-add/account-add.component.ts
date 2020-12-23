import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { addAccount } from '../../store/account.actions';
import { AccountState } from '../../store/account.reducer';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.scss']
})
export class AccountAddComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private store: Store<AccountState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {    
    this.store.dispatch(addAccount({ account: f.value }));
  }

  
}
