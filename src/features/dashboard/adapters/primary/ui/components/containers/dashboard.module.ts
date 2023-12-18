import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from 'src/features/dashboard/adapters/primary/ui/components/containers/dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard.container/dashboard.container.component';

@NgModule({
  declarations: [
    DashboardContainerComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
