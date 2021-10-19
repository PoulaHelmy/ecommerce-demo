import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsManagementRoutingModule} from './products-management-routing.module';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {AddEditProductComponent} from './compponents/add-edit-product/add-edit-product.component';
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    ProductsPageComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsManagementRoutingModule,
    SharedModule,
  ]
})
export class ProductsManagementModule {
}
