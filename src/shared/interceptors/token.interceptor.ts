import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const USER_TOKEN = 'user_token';
const ALLOWED_URLS = [
  'https://suggestions.pappers.fr/v2',
  'https://api.openai.com/',
];

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private readonly token: string | null;

  constructor(@Inject('localStorage') private localStorage: Storage) {
    this.token = this.localStorage.getItem(USER_TOKEN);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isAllowedUrl(req.url)) {
      req = this.setAuthHeaders(req);
    }
    return next.handle(req);
  }

  private isAllowedUrl(url: string): boolean {
    return !ALLOWED_URLS.some(allowedUrl => url.includes(allowedUrl));
  }

  private setAuthHeaders(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: req.headers.has('Authorization')
          ? `Bearer fb8ab128d37e2857f6175fa76af8553b00ad1293fe56b1d9`
          : `Bearer ${this.token}`,
      },
    });
  }
}
