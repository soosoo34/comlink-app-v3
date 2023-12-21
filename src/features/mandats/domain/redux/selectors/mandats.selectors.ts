import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import {
  MandatState,
  MandatStateModel,
} from '@features/mandats/domain/redux/state/mandats.state';
import { Selector } from '@ngxs/store';

export class MandatsSelectors {
  @Selector([MandatState])
  static mandats(state: MandatStateModel): MandatInterface[] | undefined {
    return state.mandats;
  }
}
