import { Injectable } from '@angular/core';
import { BuyersApiService } from '@features/buyers/adapters/secondary/real/buyers-api.service';
import { BuyerInterface } from '@features/buyers/domain/entities/buyers.interface';
import { LoadSilenceBuyers } from '@features/buyers/domain/redux/actions/buyers.action';
import { Action, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';

export class BuyersStateModel {
  buyers: BuyerInterface[] | undefined;
}

export const defaultBuyersState: BuyersStateModel = {
  buyers: [],
};

@State<BuyersStateModel>({
  name: 'buyers',
  defaults: defaultBuyersState,
})
@Injectable()
export class BuyersState {
  constructor(public buyersService: BuyersApiService) {}

  @Action(LoadSilenceBuyers)
  async loadSilenceBuyers(ctx: StateContext<BuyersStateModel>): Promise<void> {
    try {
      const buyers = await lastValueFrom(this.buyersService.getBuyers());
      ctx.patchState({
        buyers: buyers,
      });
    } catch (error) {
      console.error('Erreur lors du chargement des buyers', error);
    }
  }
}
