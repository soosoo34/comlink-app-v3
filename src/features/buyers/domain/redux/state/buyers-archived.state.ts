import { Injectable } from '@angular/core';
import { BuyersApiService } from '@features/buyers/adapters/secondary/real/buyers-api.service';
import { BuyerInterface } from '@features/buyers/domain/entities/buyers.interface';
import { LoadSilenceBuyersArchived } from '@features/buyers/domain/redux/actions/buyers-archived.action';
import { Action, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';

export class BuyersArchivedStateModel {
  archivedBuyers: BuyerInterface[] | undefined;
}

export const defaultBuyersArchivedState: BuyersArchivedStateModel = {
  archivedBuyers: [],
};

@State<BuyersArchivedStateModel>({
  name: 'buyersArchived',
  defaults: defaultBuyersArchivedState,
})
@Injectable()
export class BuyersArchivedState {
  constructor(private buyerService: BuyersApiService) {}

  @Action(LoadSilenceBuyersArchived)
  async loadSilenceBuyersArchived(
    ctx: StateContext<BuyersArchivedStateModel>
  ): Promise<void> {
    try {
      const buyers = await lastValueFrom(this.buyerService.getArchivedBuyers());
      ctx.patchState({
        archivedBuyers: buyers,
      });
    } catch (error) {
      console.error('Erreur lors du chargement des buyers', error);
    }
  }
}
