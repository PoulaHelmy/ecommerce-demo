import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from "@app/modules/admin/products-managent/pages/products-page/products-page.component";
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsManagementRoutingModule {
}
