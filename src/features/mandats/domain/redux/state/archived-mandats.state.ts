import { Injectable } from '@angular/core';
import { AuthenticationSelectors } from '@features/authentification/domain/redux/selectors/authentication.selectors';
import { MandatsApiService } from '@features/mandats/adapters/secondary/real/mandats-api.service';
import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import { LoadSilenceArchivedMandats } from '@features/mandats/domain/redux/actions/archived-mandats.actions';

import { Action, State, StateContext, Store } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';

export class ArchivedMandatStateModel {
  archivedMandats: MandatInterface[] | undefined;
}

export const defaultArchivedMandatState: ArchivedMandatStateModel = {
  archivedMandats: [],
};

@State<ArchivedMandatStateModel>({
  name: 'mandatsArchived',
  defaults: defaultArchivedMandatState,
})
@Injectable()
export class ArchivedMandatState {
  idCabinet: number | undefined;

  constructor(
    public mandatService: MandatsApiService,
    public store: Store
  ) {
    // import select from auth
    this.store.select(AuthenticationSelectors.userCabinetId).subscribe(id => {
      this.idCabinet = id;
    });
  }

  @Action(LoadSilenceArchivedMandats)
  async loadSilenceArchivedMandats(
    ctx: StateContext<ArchivedMandatStateModel>
  ): Promise<void> {
    try {
      const archivedMandats = await lastValueFrom(
        this.mandatService.getArchivedMandats()
      );
      ctx.patchState({
        archivedMandats: archivedMandats,
      });
    } catch (error) {
      console.error('Erreur lors du chargement des mandats archivés', error);
    }
  }
}
