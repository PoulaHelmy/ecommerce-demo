import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesPageComponent} from "@app/modules/admin/category-managent/pages/categories-page/categories-page.component";

const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryManagementRoutingModule {
}
