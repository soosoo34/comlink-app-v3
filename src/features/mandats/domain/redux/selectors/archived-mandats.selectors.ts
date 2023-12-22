import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import {
  ArchivedMandatState,
  ArchivedMandatStateModel,
} from '@features/mandats/domain/redux/state/archived-mandats.state';
import { Selector } from '@ngxs/store';

export class ArchivedMandatsSelectors {
  @Selector([ArchivedMandatState])
  static archivedMandats(
    state: ArchivedMandatStateModel
  ): MandatInterface[] | undefined {
    return state.archivedMandats;
  }
}
