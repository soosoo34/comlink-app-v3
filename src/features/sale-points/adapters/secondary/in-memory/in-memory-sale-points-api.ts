import { SalePointInterface } from '@features/sale-points/domain/entities/sale-point.interface';
import { SalePointsApiPort } from '@features/sale-points/domain/ports/api/sale-points-api.port';
import { Observable } from 'rxjs';

export class InMemorySalePointsApi implements SalePointsApiPort {
  salePoints!: SalePointInterface[];

  constructor() {
    this.salePoints = [];
  }

  public feedSalePoints(salePoints: SalePointInterface[]): void {
    this.salePoints = salePoints;
  }

  getSalePoints(): Observable<SalePointInterface[]> {
    return new Observable(subscriber => {
      subscriber.next(this.salePoints);
      subscriber.complete();
    });
  }
}
