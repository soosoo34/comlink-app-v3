import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TokenInterceptor } from '@src/shared/interceptors/token.interceptor';
import { Subject } from 'rxjs';

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let localStorage: Storage;
  let reqMock: HttpRequest<any>;
  let nextMock: HttpHandler;
  let event$: Subject<HttpEvent<any>>;
  const USER_TOKEN = 'user_token';

  beforeEach(() => {
    event$ = new Subject();
    localStorage = {
      getItem: jest.fn().mockReturnValue(USER_TOKEN),
    } as unknown as Storage;

    reqMock = new HttpRequest('GET', '');
    nextMock = {
      handle: jest.fn().mockReturnValue(event$),
    } as unknown as HttpHandler;

    TestBed.configureTestingModule({
      providers: [
        TokenInterceptor,
        { provide: 'localStorage', useValue: localStorage },
      ],
    });

    interceptor = TestBed.inject(TokenInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  describe('intercept', () => {
    it('should call next.handle with the same request when url is not allowed', () => {
      const url = 'https://suggestions.pappers.fr/v2';
      const reqMockUrlNotAllowed = new HttpRequest('GET', url);

      interceptor.intercept(reqMockUrlNotAllowed, nextMock).subscribe();

      expect(nextMock.handle).toHaveBeenCalledWith(reqMockUrlNotAllowed);
    });

    it('should call next.handle with the cloned request with Authorization header when url is allowed', () => {
      const url = 'https://allowed.com';
      const reqMockUrlAllowed = new HttpRequest('GET', url);

      interceptor.intercept(reqMockUrlAllowed, nextMock).subscribe();

      expect(nextMock.handle).toHaveBeenCalled();
      const clonedRequest = (nextMock.handle as jest.Mock).mock.calls[0][0];
      expect(clonedRequest.headers.get('Authorization')).toBe(
        `Bearer ${USER_TOKEN}`
      );
    });
  });
});
