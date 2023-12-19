import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CheckUserInLocalStorage,
  Login,
} from '@features/authentification/domain/redux/actions/authentication.action';
import { AuthenticationSelectors } from '@features/authentification/domain/redux/selectors/authentication.selectors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-login.container',
  templateUrl: './login.container.component.html',
  styleUrl: './login.container.component.scss',
})
export class LoginContainerComponent {
  loginForm: FormGroup;

  @Select(AuthenticationSelectors.loading) isLoading$!: Observable<boolean>;
  loading = false;

  @Select(AuthenticationSelectors.errorMessages)
  errorMessage$!: Observable<boolean>;
  errorMessage: boolean = false;

  constructor(private store: Store) {
    this.loginForm = new FormGroup({
      log: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.store.dispatch(new CheckUserInLocalStorage());
    this.isLoading$.pipe(untilDestroyed(this)).subscribe(data => {
      this.loading = data;
    });
    this.errorMessage$.pipe(untilDestroyed(this)).subscribe(data => {
      if (data) {
        this.errorMessage = true;
      }
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
