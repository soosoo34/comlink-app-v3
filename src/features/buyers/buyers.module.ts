import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BuyersApiService } from '@features/buyers/adapters/secondary/real/buyers-api.service';
import { BuyerApiPort } from '@features/buyers/domain/ports/buyer-api.port';
import { BuyersArchivedState } from '@features/buyers/domain/redux/state/buyers-archived.state';
import { BuyersState } from '@features/buyers/domain/redux/state/buyers.state';
import { NgxsModule } from '@ngxs/store';

import { BuyersRoutingModule } from './buyers-routing.module';

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forFeature([BuyersState]),
    NgxsModule.forFeature([BuyersArchivedState]),
    CommonModule,
    BuyersRoutingModule,
  ],
  providers: [{ provide: BuyerApiPort, useClass: BuyersApiService }],
})
export class BuyersModule {}
