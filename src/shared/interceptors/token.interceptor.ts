import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Vérifie si l'URL de la requête contient la chaîne spécifiée
    if (
      !req.url.includes('https://suggestions.pappers.fr/v2') &&
      !req.url.includes('https://api.openai.com/')
    ) {
      if (req.headers.has('Authorization')) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer fb8ab128d37e2857f6175fa76af8553b00ad1293fe56b1d9`,
          },
        });
      } else if (localStorage.getItem('user_token')) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem('user_token')}`,
          },
        });
      }
    }
    return next.handle(req);
  }
}
