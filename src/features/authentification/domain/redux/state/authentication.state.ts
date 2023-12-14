import { Injectable } from '@angular/core';
import { LoginApiResponse } from '@features/authentification/adapters/secondary/api/login-response.interface';
import { User } from '@features/authentification/domain/entities/user';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import { Login } from '@features/authentification/domain/redux/actions/authentication.action';
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
      tap((response: LoginApiResponse) => {
        const user = response.user;
        console.log('user', user);
        ctx.setState({
          user,
          isLogged: true,
          loading: false,
          errorMessage: null,
        });
      }),
      catchError(error => {
        ctx.patchState({
          errorMessage: error.message,
          loading: false,
        });
        return throwError(error);
      })
    );
  }
}
