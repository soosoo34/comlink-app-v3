import { Injectable } from '@angular/core';
import { MandatsApiService } from '@features/mandats/adapters/secondary/real/mandats-api.service';
import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
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
  constructor(public mandatService: MandatsApiService) {}

  @Action(LoadSilenceMandats)
  async loadSilenceMandats(ctx: StateContext<MandatStateModel>): Promise<void> {
    try {
      const mandats = await lastValueFrom(this.mandatService.getMandats());
      ctx.patchState({
        mandats: mandats,
      });
    } catch (error) {
      console.error('Erreur lors du chargement des mandats', error);
    }
  }
}
