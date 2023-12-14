import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationState } from '@features/authentification/domain/redux/state/authentication.state';
import { NgxsModule } from '@ngxs/store';
import { AuthenticationApiService } from 'src/features/authentification/adapters/secondary/real/authentication-api.service';
import { AuthenticationRoutingModule } from 'src/features/authentification/authentication-routing.module';
import { AuthenticationApiPort } from 'src/features/authentification/domain/ports/api/authentication-api.port';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthenticationState]),
    AuthenticationRoutingModule,
  ],
  providers: [
    { provide: AuthenticationApiPort, useClass: AuthenticationApiService },
  ],
  exports: [],
})
export class AuthenticationModule {}
