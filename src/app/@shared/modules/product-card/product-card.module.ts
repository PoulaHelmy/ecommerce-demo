import {NgModule} from '@angular/core';
import {ProductCardComponent} from './product-card.component';
import {SharedModule} from "@shared/shared.module";
import {ProductCardPopupComponent} from "@shared/modules/product-card/components/product-card-popup/product-card-popup.component";


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCardPopupComponent
  ],
  exports: [
    ProductCardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProductCardModule {
}
