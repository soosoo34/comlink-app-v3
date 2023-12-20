import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from '@features/dashboard/adapters/primary/ui/components/containers/dashboard.container/dashboard.container.component';
import { DashboardRoutingModule } from '@features/dashboard/dashboard-routing.module';
import { MandatsModule } from '@features/mandats/mandats.module';

@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [CommonModule, DashboardRoutingModule, MandatsModule],
})
export class DashboardModule {}
