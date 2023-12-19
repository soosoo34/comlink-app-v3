import {
  AuthenticationState,
  AuthenticationStateModel,
} from '@features/authentification/domain/redux/state/authentication.state';
import { Selector } from '@ngxs/store';

export class AuthenticationSelectors {
  @Selector([AuthenticationState])
  static role(state: AuthenticationStateModel) {
    return state.user?.role;
  }

  @Selector([AuthenticationState])
  static isLogged(state: AuthenticationStateModel): boolean {
    return state.isLogged;
  }

  @Selector([AuthenticationState])
  static loading(state: AuthenticationStateModel): boolean {
    return state.loading;
  }

  @Selector([AuthenticationState])
  static errorMessages(state: AuthenticationStateModel): string | null {
    return state.errorMessage;
  }
}
