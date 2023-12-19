import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CheckUserInLocalStorage,
  Login,
} from '@features/authentification/domain/redux/actions/authentication.action';
import { AuthenticationSelectors } from '@features/authentification/domain/redux/selectors/authentication.selectors';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login.container',
  templateUrl: './login.container.component.html',
  styleUrl: './login.container.component.scss',
})
export class LoginContainerComponent {
  loginForm: FormGroup;
  loading = false;
  @Select(AuthenticationSelectors.loading) isLoading$!: Observable<boolean>;

  constructor(private store: Store) {
    this.loginForm = new FormGroup({
      log: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.store.dispatch(new CheckUserInLocalStorage());
    this.isLoading$.subscribe(data => {
      console.log(data);
      this.loading = data;
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    const logControl = this.loginForm.get('log');
    const passwordControl = this.loginForm.get('password');

    if (this.loginForm.valid && logControl && passwordControl) {
      console.log(new Login(logControl.value, passwordControl.value));
      this.store.dispatch(new Login(logControl.value, passwordControl.value));
    }
  }
}
