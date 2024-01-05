import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BuyersModule} from '@features/buyers/buyers.module';
import {
  DashboardContainerComponent,
} from '@features/dashboard/adapters/primary/ui/components/containers/dashboard.container/dashboard.container.component';
import {DashboardRoutingModule} from '@features/dashboard/dashboard-routing.module';
import {MandatsModule} from '@features/mandats/mandats.module';
import {SalePointsModule} from '@features/sale-points/sale-points.module';

@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MandatsModule,
    SalePointsModule,
    BuyersModule,
  ],
})
export class DashboardModule {
}
