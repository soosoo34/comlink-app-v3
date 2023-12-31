import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@features/authentification/adapters/secondary/guard/auth.guard';
import { DashboardContainerComponent } from '@features/dashboard/adapters/primary/ui/components/containers/dashboard.container/dashboard.container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
