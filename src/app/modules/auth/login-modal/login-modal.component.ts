import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as fromAuthActions from 'src/app/store/actions/auth.actions'
import { AuthService } from '../resources/auth.service';
import { ModalService } from '../resources/modal.service';
import { User } from '../resources/User';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(fromAuthActions.loginPage({
      username: f.value.username,
      password: f.value.password }))
  }

  cancel(): void {
    this.modalService.hide();
  }

}
