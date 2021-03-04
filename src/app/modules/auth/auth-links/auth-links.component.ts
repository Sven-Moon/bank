import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { logout } from 'src/app/store/actions/auth.actions';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from '../resources/auth.service';
import { ModalService } from '../resources/modal.service';

@Component({
  selector: 'app-auth-links',
  templateUrl: './auth-links.component.html',
  styleUrls: ['./auth-links.component.scss']
})
export class AuthLinksComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private modalService: ModalService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(logout());
  }

  openModal() {
    this.modalService.show(LoginModalComponent)
  }

}
