import { Injectable } from '@angular/core';
import { LoginApiResponse } from '@features/authentification/adapters/secondary/api/login-response.interface';
import { User } from '@features/authentification/domain/entities/user';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import {
  CheckUserInLocalStorage,
  Login,
} from '@features/authentification/domain/redux/actions/authentication.action';
import { Action, State, StateContext } from '@ngxs/store';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthenticationStateModel {
  user: User | null;
  isLogged: boolean;
  loading: boolean;
  errorMessage: string | null;
}

export const authenticationStateDefault: AuthenticationStateModel = {
  user: null,
  isLogged: false,
  loading: false,
  errorMessage: null,
};

@State<AuthenticationStateModel>({
  name: 'authentication',
  defaults: authenticationStateDefault,
})
@Injectable()
export class AuthenticationState {
  constructor(private authenticationApi: AuthenticationApiPort) {}

  @Action(CheckUserInLocalStorage)
  checkUserInLocalStorage(ctx: StateContext<AuthenticationStateModel>): void {
    const tokenInLocalStorage = localStorage.getItem('user_token');
    const userDataInLocalStorageStr = localStorage.getItem('user_data');
    const userDataInLocalStorage = JSON.parse(
      userDataInLocalStorageStr as string
    );
    const isLoggedIn =
      tokenInLocalStorage != null && userDataInLocalStorage != null;

    if (isLoggedIn) {
      ctx.setState({
        user: userDataInLocalStorage,
        isLogged: isLoggedIn,
        loading: false,
        errorMessage: null,
      });
    }
  }

  @Action(Login)
  login(
    ctx: StateContext<AuthenticationStateModel>,
    action: Login
  ): Observable<LoginApiResponse | Error> {
    ctx.patchState({
      loading: true,
      errorMessage: null,
    });
    return this.authenticationApi.login(action.log, action.password).pipe(
      tap((response: LoginApiResponse) =>
        this.handleSuccessfulLogin(response, ctx)
      ),
      catchError(error => {
        ctx.patchState({
          errorMessage: error.message,
          loading: false,
        });
        return throwError(error);
      })
    );
  }

  private handleSuccessfulLogin(
    response: LoginApiResponse,
    ctx: StateContext<AuthenticationStateModel>
  ): void {
    const user = response.user;

    // Save token to localStorage
    localStorage.setItem('user_token', response.access_token);
    localStorage.setItem('user_data', JSON.stringify(user));

    // Check token is saved in localStorage
    const tokenInLocalStorage = localStorage.getItem('acces_token');
    const userDataInLocalStorage = localStorage.getItem('user_data');
    // Update state based on whether token and user data are present in localStorage
    const isLoggedIn =
      tokenInLocalStorage != null && userDataInLocalStorage != null;

    ctx.setState({
      user,
      isLogged: isLoggedIn,
      loading: false,
      errorMessage: null,
    });
  }
}
