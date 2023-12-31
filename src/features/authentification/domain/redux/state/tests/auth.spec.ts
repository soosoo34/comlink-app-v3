import { TestBed } from '@angular/core/testing';
import { InMemoryAuthenticationApi } from '@features/authentification/adapters/secondary/in-memory/in-memory-authentication-api';
import { User } from '@features/authentification/domain/entities/user';
import { UserBuilder } from '@features/authentification/domain/entities/user.builder';
import { AuthenticationApiPort } from '@features/authentification/domain/ports/api/authentication-api.port';
import {
  CheckUserInLocalStorage,
  Login,
} from '@features/authentification/domain/redux/actions/authentication.action';
import { AuthenticationState } from '@features/authentification/domain/redux/state/authentication.state';
import { NgxsModule, Store } from '@ngxs/store';

describe('Login Action', () => {
  let store: Store;
  let authenticationApi: InMemoryAuthenticationApi;
  const userBuilder = new UserBuilder();
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    // Créez l'instance ici
    authenticationApi = new InMemoryAuthenticationApi();
    localStorageMock = {
      user_token: 'token',
      user_data: JSON.stringify(userBuilder.build()),
    };
    localStorage.getItem = jest.fn(key => localStorageMock[key]);
    localStorage.setItem = jest.fn((key, value) => {
      localStorageMock[key] = value.toString();
    });

    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthenticationState])],
      providers: [
        {
          provide: AuthenticationApiPort,
          useValue: authenticationApi,
        },
        {
          provide: InMemoryAuthenticationApi,
          useValue: authenticationApi,
        },
      ],
    });
    store = TestBed.inject(Store);
  });

  it("devrait authentifier l'utilisateur et mettre à jour l'état", () => {
    const log = 'test@example.com';
    const password = 'password';
    const user: User = userBuilder.build();
    authenticationApi = TestBed.inject(InMemoryAuthenticationApi);
    authenticationApi.shouldSucceedNextLogin();
    store.dispatch(new Login(log, password));
    expect(store.selectSnapshot(state => state.authentication)).toEqual({
      user,
      errorMessage: null,
      isLogged: true,
      loading: false,
    });
    expect(localStorage.getItem('user_token')).toEqual('token');
    expect(localStorage.getItem('user_data')).toEqual(JSON.stringify(user));
  });

  it("devrait gérer l'erreur lors de l'authentification et mettre à jour l'état", () => {
    const log = '';
    const password = '';
    const errorMessage = 'Invalid credentials';

    authenticationApi.shouldFailNextLogin();
    store.dispatch(new Login(log, password));
    expect(store.selectSnapshot(state => state.authentication)).toEqual({
      user: null,
      errorMessage,
      isLogged: false,
      loading: false,
    });
  });

  it('should authenticate the user and update the state', async () => {
    const log = 'test@example.com';
    const password = 'password';
    const user: User = userBuilder.build();
    authenticationApi = TestBed.inject(InMemoryAuthenticationApi);
    authenticationApi.shouldSucceedNextLogin();
    store.dispatch(new Login(log, password));
    store.dispatch(new CheckUserInLocalStorage());
    const authenticationState = store.selectSnapshot(
      state => state.authentication
    );

    // Check if the user is logged in after dispatching the Login action
    expect(authenticationState.isLogged).toEqual(true);

    // Check if the user information in the state matches the logged-in user
    expect(authenticationState.user).toEqual(user);
  });
});
