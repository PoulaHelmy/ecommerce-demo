import {Routes} from '@angular/router';
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";


export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'all-products',
    loadChildren: () =>
      import('./modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'admin/product-management',
    loadChildren: () => import('./modules/admin/products-managent/products-management.module').then(m => m.ProductsManagementModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
