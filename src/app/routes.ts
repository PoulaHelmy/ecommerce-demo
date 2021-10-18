import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full'
  }
  // {
  //   path: 'dashboard',
  //   // component: DashboardComponent,
  //   canActivate: [IsAuthenticatedGuard],
  // },
  // {
  //   path: 'products',
  //   // component: ProductsComponent,
  //   canActivate: [IsAuthenticatedGuard, HasRoleGuard],
  //   data: {
  //     role: 'Admin',
  //   },
  // },
  // {
  //   path: 'login',
  //   // component: LoginComponent,
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'login',
  // },
];
