import { Injectable } from '@angular/core';
import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { LoadSilenceArchivedMandats } from '@features/mandats/domain/redux/actions/archived-mandats.actions';
import { Action, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';

export class ArchivedMandatStateModel {
  archivedMandats: MandatInterface[] | undefined;
}

export const defaultArchivedMandatState: ArchivedMandatStateModel = {
  archivedMandats: [],
};

@State<ArchivedMandatStateModel>({
  name: 'archivedMandats',
  defaults: defaultArchivedMandatState,
})
@Injectable()
export class ArchivedMandatState {
  constructor(public mandatService: MandatApiPort) {}

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
