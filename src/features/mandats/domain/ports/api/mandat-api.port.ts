import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';

export abstract class MandatApiPort {
  abstract getMandats(): MandatInterface[];
}
