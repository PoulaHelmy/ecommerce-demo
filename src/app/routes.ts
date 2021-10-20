import {Routes} from '@angular/router';
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {AdminGuard} from "@core/http/guards/admin.guard";
import {UserGuard} from "@core/http/guards/user.guard";


export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'all-products',
    loadChildren: () =>
      import('./modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'user-products',
    loadChildren: () =>
      import('./modules/user/user-products/user-products.module').then((m) => m.UserProductsModule),
    canActivate: [UserGuard]
  },
  {
    path: 'admin/product-management',
    loadChildren: () => import('./modules/admin/products-managent/products-management.module').then(m => m.ProductsManagementModule),
    canActivate: [AdminGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
