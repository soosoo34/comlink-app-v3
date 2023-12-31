import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { Observable } from 'rxjs';

export class InMemoryMandatsApi implements MandatApiPort {
  mandat!: MandatInterface[];

  constructor() {
    this.mandat = [];
  }

  public feedMandats(mandat: MandatInterface[]): void {
    this.mandat = mandat;
  }

  public clearMandats(): void {
    this.mandat = [];
  }

  getMandats(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(this.mandat);
      subscriber.complete();
    });
  }

  getArchivedMandats(): Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(this.mandat);
      subscriber.complete();
    });
  }
}
