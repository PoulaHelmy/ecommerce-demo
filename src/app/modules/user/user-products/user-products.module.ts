import {NgModule} from '@angular/core';

import {UserProductsRoutingModule} from './user-products-routing.module';
import {UserProductsPageComponent} from './pages/user-products-page/user-products-page.component';
import {SharedModule} from "@shared/shared.module";
import {ProductCardModule} from "@shared/modules/product-card/product-card.module";


@NgModule({
  declarations: [
    UserProductsPageComponent
  ],
  imports: [
    SharedModule,
    UserProductsRoutingModule,
    ProductCardModule
  ]
})
export class UserProductsModule {
}
