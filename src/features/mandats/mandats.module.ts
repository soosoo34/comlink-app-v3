import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MandatsApiService } from '@features/mandats/adapters/secondary/real/mandats-api.service';
import { MandatApiPort } from '@features/mandats/domain/ports/api/mandat-api.port';
import { ArchivedMandatState } from '@features/mandats/domain/redux/state/archived-mandats.state';
import { MandatState } from '@features/mandats/domain/redux/state/mandats.state';
import { NgxsModule } from '@ngxs/store';
import { MandatsContainerComponent } from 'src/features/mandats/adapters/primary/ui/containers/mandats.container/mandats-container.component';

import { MandatsRoutingModule } from './mandats-routing.module';

@NgModule({
  imports: [
    NgxsModule.forFeature([MandatState]),
    NgxsModule.forFeature([ArchivedMandatState]),
    CommonModule,
    MandatsRoutingModule,
  ],
  declarations: [MandatsContainerComponent],
  exports: [MandatsContainerComponent],
  providers: [{ provide: MandatApiPort, useClass: MandatsApiService }],
})
export class MandatsModule {}
