import { Injectable } from '@angular/core';
import { User } from '@features/authentification/domain/entities/user';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import { Login } from '@features/authentification/domain/redux/actions/authentication.action';
import { Action, State, StateContext } from '@ngxs/store';
import { of, tap } from 'rxjs';
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
  login(ctx: StateContext<AuthenticationStateModel>, action: Login) {
    ctx.patchState({
      loading: true,
      errorMessage: null,
    });

    return this.authenticationApi
      .login(action.email, action.password)
      .pipe(
        tap((user: User) => {
          ctx.patchState({
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
          // Utilisez of pour retourner un Observable qui émet une erreur
          return of(error);
        })
      )
      .subscribe();
  }
}
