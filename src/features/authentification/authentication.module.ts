import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from '@features/authentification/adapters/primary/ui/components/login-form/login-form.component';
import { LoginContainerComponent } from '@features/authentification/adapters/primary/ui/container/login.container/login.container.component';
import { AuthenticationState } from '@features/authentification/domain/redux/state/authentication.state';
import { BtnModule } from '@libs/btn/btn.module';
import { EbbInputModule } from '@libs/input/input.module';
import { NgxsModule } from '@ngxs/store';
import { AuthenticationApiService } from 'src/features/authentification/adapters/secondary/real/authentication-api.service';
import { AuthenticationRoutingModule } from 'src/features/authentification/authentication-routing.module';
import { AuthenticationApiPort } from 'src/features/authentification/domain/ports/api/authentication-api.port';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([AuthenticationState]),
    AuthenticationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    EbbInputModule,
    NgOptimizedImage,
    BtnModule,
  ],
  providers: [
    { provide: AuthenticationApiPort, useClass: AuthenticationApiService },
  ],
  exports: [],
  declarations: [LoginContainerComponent, LoginFormComponent],
})
export class AuthenticationModule {}
