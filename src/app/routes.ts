import {Routes} from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: 'admin/user-management',
    loadChildren: () => import('./modules/admin/users-managent/users-management.module').then(m => m.UsersManagementModule)
  },
  {
    path: 'admin/product-management',
    loadChildren: () => import('./modules/admin/products-managent/products-management.module').then(m => m.ProductsManagementModule)
  },
  {
    path: 'admin/category-management',
    loadChildren: () => import('./modules/admin/category-managent/category-management.module').then(m => m.CategoryManagementModule)
  },
]
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full'
  },
  ...AdminRoutes,
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
