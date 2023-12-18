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
}
