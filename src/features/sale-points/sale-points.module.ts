import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SalePointsRoutingModule } from 'src/features/sale-points/sale-points-routing.module';
import { SalePointsContainerComponent } from './adapters/primary/ui/containers/sale-points-container/sale-points-container.component';

@NgModule({
  declarations: [
    SalePointsContainerComponent
  ],
  imports: [CommonModule, SalePointsRoutingModule],
})
export class SalePointsModule {}
