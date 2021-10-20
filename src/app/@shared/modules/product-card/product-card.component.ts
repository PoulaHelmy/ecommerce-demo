import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "@core/data/interface/product.model";
import {MatDialog} from "@angular/material/dialog";
import {ProductCardPopupComponent} from "@shared/modules/product-card/components/product-card-popup/product-card-popup.component";
import {LoginPopupComponent} from "@shared/components/login-popup/login-popup.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductModel;

  constructor(private dialog: MatDialog) {
  }

  openPopup(): void {
    this.dialog.open(ProductCardPopupComponent, {
      data: {
        data: this.product
      },
    });
  }

  login(): void {
    this.dialog.open(LoginPopupComponent, {});
  }

  addToCart(): void {

  }

  ngOnInit(): void {
  }

}
