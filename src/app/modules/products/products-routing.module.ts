import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from "@app/modules/products/pages/products-page/products-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
