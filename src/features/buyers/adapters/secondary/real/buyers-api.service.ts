import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuyerInterface } from '@features/buyers/domain/entities/buyers.interface';
import { BuyerApiPort } from '@features/buyers/domain/ports/buyer-api.port';
import { environment } from '@src/environments/environment';
import { EMPTY, expand, Observable, reduce } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BuyersApiService implements BuyerApiPort {
  apiPath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBuyers(): Observable<any> {
    return this.http.get(`${this.apiPath}/buyers`);
  }

  getArchivedBuyers(): Observable<BuyerInterface[]> {
    let page = 0;
    const offset = 9000;
    return this.loadPage(page, offset).pipe(
      expand(buyers =>
        buyers.length < offset ? EMPTY : this.loadPage(++page, offset)
      ),
      reduce(
        (acc: BuyerInterface[], buyers: BuyerInterface[]) => acc.concat(buyers),
        [] as BuyerInterface[]
      ),
      map(buyers => {
        const uniqueBuyersSet = new Set();
        const uniqueBuyers = [];
        for (const buyer of buyers) {
          const buyerStr = JSON.stringify(buyer);
          if (!uniqueBuyersSet.has(buyerStr)) {
            uniqueBuyersSet.add(buyerStr);
            uniqueBuyers.push(buyer);
          }
        }

        return uniqueBuyers;
      })
    );
  }

  private loadPage(page: number, offset: number): Observable<BuyerInterface[]> {
    return this.http.get<BuyerInterface[]>(
      `${this.apiPath}/buyers/archives?page=${page}&offset=${offset}`
    );
  }
}
