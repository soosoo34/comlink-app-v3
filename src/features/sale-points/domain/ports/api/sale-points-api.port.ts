import { SalePointInterface } from '@features/sale-points/domain/entities/sale-point.interface';
import { Observable } from 'rxjs';

export abstract class SalePointsApiPort {
  abstract getSalePoints(): Observable<SalePointInterface[]>;
}
