import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from "@app/modules/admin/products-managent/pages/products-page/products-page.component";


const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsManagementRoutingModule {
}
