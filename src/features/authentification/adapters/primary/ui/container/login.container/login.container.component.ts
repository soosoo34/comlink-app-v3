import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '@features/authentification/domain/redux/actions/authentication.action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-login.container',
  templateUrl: './login.container.component.html',
  styleUrl: './login.container.component.scss',
})
export class LoginContainerComponent {
  loginForm: FormGroup;

  constructor(private store: Store) {
    this.loginForm = new FormGroup({
      log: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    const logControl = this.loginForm.get('log');
    const passwordControl = this.loginForm.get('password');

    if (this.loginForm.valid && logControl && passwordControl) {
      this.store.dispatch(new Login(logControl.value, passwordControl.value));
    }
  }
}
