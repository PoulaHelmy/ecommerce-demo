import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {SharedModule} from "@shared/shared.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSliderModule} from "@angular/material/slider";
import {ProductCardModule} from "@shared/modules/product-card/product-card.module";


@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    MatCheckboxModule,
    MatSliderModule,
    ProductCardModule
  ]
})
export class ProductsModule {
}
