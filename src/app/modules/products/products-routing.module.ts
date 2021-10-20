import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from "@app/modules/products/pages/products-page/products-page.component";
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    pathMatch: 'full'
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
export class ProductsRoutingModule {
}
