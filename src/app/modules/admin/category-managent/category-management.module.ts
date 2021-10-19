import {NgModule} from '@angular/core';

import {CategoryManagementRoutingModule} from './category-management-routing.module';
import {CategoriesPageComponent} from './pages/categories-page/categories-page.component';
import {AddEditCategoryComponent} from './components/add-edit-category/add-edit-category.component';
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    CategoriesPageComponent,
    AddEditCategoryComponent
  ],
  imports: [
    CategoryManagementRoutingModule,
    SharedModule,
  ]
})
export class CategoryManagementModule {
}
