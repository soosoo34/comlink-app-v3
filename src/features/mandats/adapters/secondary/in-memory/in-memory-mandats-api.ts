import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { Observable } from 'rxjs';

export class InMemoryMandatsApi implements MandatApiPort {
  mandat!: MandatInterface[];

  constructor() {
    this.mandat = [];
  }

  feedMandats(mandat: MandatInterface): void {
    this.mandat.push(mandat);
  }

  getMandats(): Observable<MandatInterface[]> {
    return new Observable(subscriber => {
      subscriber.next(this.mandat);
      subscriber.complete();
    });
  }
}
