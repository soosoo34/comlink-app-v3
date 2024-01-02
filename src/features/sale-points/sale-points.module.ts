import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SalePointsApiService } from '@features/sale-points/adapters/secondary/real/sale-points.service';
import { SalePointsApiPort } from '@features/sale-points/domain/ports/api/sale-points-api.port';
import { SalePointsState } from '@features/sale-points/domain/redux/state/sale-points.state';
import { NgxsModule } from '@ngxs/store';

import { SalePointsRoutingModule } from 'src/features/sale-points/sale-points-routing.module';
import { SalePointsContainerComponent } from './adapters/primary/ui/containers/sale-points-container/sale-points-container.component';

@NgModule({
  declarations: [SalePointsContainerComponent],
  providers: [{ provide: SalePointsApiPort, useClass: SalePointsApiService }],
  imports: [
    CommonModule,
    SalePointsRoutingModule,
    NgxsModule.forFeature([SalePointsState]),
  ],
})
export class SalePointsModule {}
