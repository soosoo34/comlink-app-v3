import { Injectable } from '@angular/core';
import { MandatInterface } from '@features/mandats/domain/entities/mandat.interface';
import { AddProspectionMandatsWithoutApiCall } from '@features/mandats/domain/redux/actions/prospection-mandats.actions';
import { Action, State, StateContext } from '@ngxs/store';

export class ProspectionMandatsStateModel {
  prospectionMandats!: MandatInterface[];
}

export const defaultProspectionMandatState: ProspectionMandatsStateModel = {
  prospectionMandats: [],
};

@State<ProspectionMandatsStateModel>({
  name: 'prospectionMandats',
  defaults: defaultProspectionMandatState,
})
@Injectable()
export class ProspectionMandatsState {
  constructor() {}

  @Action(AddProspectionMandatsWithoutApiCall)
  addProspectionMandatsWithoutApiCall(
    ctx: StateContext<ProspectionMandatsStateModel>,
    action: AddProspectionMandatsWithoutApiCall
  ) {
    const prospectionMandats = action.payload;
    ctx.patchState({
      prospectionMandats: prospectionMandats,
    });
  }
}
