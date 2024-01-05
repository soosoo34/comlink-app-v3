import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '@src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuyersApiService {
  apiPath = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getBuyers(): Observable<any> {
    return this.http.get(`${this.apiPath}/buyers`);
  }
}
