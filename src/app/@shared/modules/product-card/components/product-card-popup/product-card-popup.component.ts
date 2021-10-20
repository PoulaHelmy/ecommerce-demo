import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ProductModel} from "@core/data/interface/product.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoginPopupComponent} from "@shared/components/login-popup/login-popup.component";

@Component({
  selector: 'app-product-card-popup',
  templateUrl: './product-card-popup.component.html',
  styleUrls: ['./product-card-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardPopupComponent implements OnInit {
  product!: ProductModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { data: ProductModel },
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ProductCardPopupComponent>) {
  }

  ngOnInit(): void {
    this.product = this.data.data;
  }

  login(): void {
    this.dialog.open(LoginPopupComponent, {});
  }

  addToCart(): void {

  }
}
