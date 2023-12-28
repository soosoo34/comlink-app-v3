import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';

export class AddProspectionMandatsWithoutApiCall {
  static readonly type = '[Mandats] Add Prospection Mandats Without Api Call';

  constructor(public payload: MandatInterface[]) {}
}
