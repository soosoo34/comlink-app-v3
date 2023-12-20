import { Injectable } from '@angular/core';
import { MandatsService } from '@features/mandats/adapters/secondary/real/mandats.service';
import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import { LoadSilenceMandats } from '@features/mandats/domain/redux/actions/mandats.action';
import { Action, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';

export class MandatStateModel {
  mandats: MandatInterface[] | undefined;
  archivedMandats: MandatInterface[] | undefined;
  mandatSelection: number[] | undefined;
}

@State<MandatStateModel>({
  name: 'mandats',
  defaults: {
    mandats: [],
    archivedMandats: [],
    mandatSelection: [],
  },
})
@Injectable()
export class MandatState {
  constructor(public mandatService: MandatsService) {}

  @Action(LoadSilenceMandats)
  async loadSilenceMandats(ctx: StateContext<MandatStateModel>): Promise<void> {
    const mandats = await lastValueFrom(this.mandatService.getMandats());
    ctx.patchState({
      mandats,
    });
  }
}
