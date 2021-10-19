import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "@core/data/interface/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
