import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardPopupComponent} from './product-card-popup.component';


@NgModule({
  declarations: [
    ProductCardPopupComponent
  ],
  exports: [
    ProductCardPopupComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductCardPopupModule {
}
