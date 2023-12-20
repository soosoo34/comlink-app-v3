import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MandatState } from '@features/mandats/domain/redux/state/mandats.state';
import { NgxsModule } from '@ngxs/store';
import { MandatsContainerComponent } from 'src/features/mandats/adapters/primary/ui/containers/mandats.container/mandats-container.component';
import { TestComponent } from './adapters/primary/ui/containers/test/test.component';
import { MandatsRoutingModule } from './mandats-routing.module';

@NgModule({
  imports: [
    NgxsModule.forFeature([MandatState]),
    CommonModule,
    MandatsRoutingModule,
  ],
  declarations: [MandatsContainerComponent, TestComponent],
  exports: [MandatsContainerComponent, TestComponent],
})
export class MandatsModule {}
