import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    data: { hideNavbar: true },
    loadChildren: () =>
      import('src/features/authentification/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('src/features/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
  },

  {
    path: 'point-de-vente',
    loadChildren: () =>
      import('src/features/sale-points/sale-points.module').then(
        m => m.SalePointsModule
      ),
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
