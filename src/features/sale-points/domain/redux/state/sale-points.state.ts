import { Injectable } from '@angular/core';
import { SalePointInterface } from '@features/sale-points/domain/entities/sale-point.interface';
import { SalePointsApiPort } from '@features/sale-points/domain/ports/api/sale-points-api.port';
import { LoadSilenceSalePoints } from '@features/sale-points/domain/redux/actions/sale-points.action';
import { Action, State, StateContext } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';

export class SalePointsStateModel {
  salePoints: SalePointInterface[] | undefined;
}

export const defaultSalePointsState: SalePointsStateModel = {
  salePoints: [],
};

@State<SalePointsStateModel>({
  name: 'salePoints',
  defaults: defaultSalePointsState,
})
@Injectable()
export class SalePointsState {
  constructor(public salePointService: SalePointsApiPort) {}

  @Action(LoadSilenceSalePoints)
  async loadSilenceSalePoints(
    ctx: StateContext<SalePointsStateModel>
  ): Promise<void> {
    try {
      const salePoints = await lastValueFrom(
        this.salePointService.getSalePoints()
      );
      ctx.patchState({
        salePoints: salePoints,
      });
    } catch (error) {
      console.error('Erreur lors du chargement des salePoints', error);
    }
  }
}
