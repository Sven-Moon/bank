import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAuthActions from 'src/app/store/actions/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(fromAuthActions
      .loginPage({
        username: f.value.username,
        password: f.value.password
      }))
  }

}
