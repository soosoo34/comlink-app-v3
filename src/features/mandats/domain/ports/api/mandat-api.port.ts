import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import { Observable } from 'rxjs';

export abstract class MandatApiPort {
  abstract getMandats(): Observable<MandatInterface[]>;

  abstract getArchivedMandats(): Observable<MandatInterface[]>;
}
