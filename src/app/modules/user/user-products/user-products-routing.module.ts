import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {UserProductsPageComponent} from "@app/modules/user/user-products/pages/user-products-page/user-products-page.component";

const routes: Routes = [
  {
    path: '',
    component: UserProductsPageComponent,
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
export class UserProductsRoutingModule {
}
