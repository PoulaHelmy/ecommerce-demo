import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductsRoutingModule } from './user-products-routing.module';
import { UserProductsPageComponent } from './pages/user-products-page/user-products-page.component';


@NgModule({
  declarations: [
    UserProductsPageComponent
  ],
  imports: [
    CommonModule,
    UserProductsRoutingModule
  ]
})
export class UserProductsModule { }
