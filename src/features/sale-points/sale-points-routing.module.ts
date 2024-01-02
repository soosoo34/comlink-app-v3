import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalePointsContainerComponent } from '@features/sale-points/adapters/primary/ui/containers/sale-points-container/sale-points-container.component';

const routes: Routes = [
  {
    path: '',
    component: SalePointsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalePointsRoutingModule {}
