import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ProductModel} from "@core/data/interface/product.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

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
    private dialogRef: MatDialogRef<ProductCardPopupComponent>) {
  }

  ngOnInit(): void {
    this.product = this.data.data;
  }

}
