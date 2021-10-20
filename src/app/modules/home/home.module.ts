import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ProductCardModule} from "@shared/modules/product-card/product-card.module";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    ProductCardModule,
    SharedModule
  ]
})
export class HomeModule {
}
