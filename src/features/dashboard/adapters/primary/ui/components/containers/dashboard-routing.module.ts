import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from '@features/dashboard/adapters/primary/ui/components/containers/dashboard.container/dashboard.container.component';

const routes: Routes = [
  {
    path: 'test',
    component: DashboardContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
