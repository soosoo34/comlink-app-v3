import { Injectable } from '@angular/core';
import {
  MandatInterface,
  MandatStateEnum,
} from '@features/mandats/domain/entities/mandat.interface';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { LoadSilenceMandats } from '@features/mandats/domain/redux/actions/mandats.action';
import { Action, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';

export class MandatStateModel {
  mandats: MandatInterface[] | undefined;
  mandatSelection: number[] | undefined;
}

export const defaultMandatState: MandatStateModel = {
  mandats: [],
  mandatSelection: [],
};

@State<MandatStateModel>({
  name: 'mandats',
  defaults: defaultMandatState,
})
@Injectable()
export class MandatState {
  constructor(public mandatService: MandatApiPort) {}

  @Action(LoadSilenceMandats)
  async loadSilenceMandats(ctx: StateContext<MandatStateModel>): Promise<void> {
    try {
      const mandats = await lastValueFrom(this.mandatService.getMandats());
      const mandatsFiltered = mandats.filter(
        mandat => mandat.etat !== MandatStateEnum.prospection
      );
      ctx.patchState({
        mandats: mandatsFiltered,
      });
    } catch (error) {
      console.error('Erreur lors du chargement des mandats', error);
    }
  }
}
