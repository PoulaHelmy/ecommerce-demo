import {Component, OnInit} from '@angular/core';
import {ProductModel} from "@core/data/interface/product.model";
import {UserCartService} from "@core/http/services/user-cart.service";

@Component({
  selector: 'app-user-products-page',
  templateUrl: './user-products-page.component.html',
  styleUrls: ['./user-products-page.component.scss']
})
export class UserProductsPageComponent implements OnInit {
  loading = true;
  AllProducts: ProductModel[] = [];

  constructor(private userCartService: UserCartService) {
  }

  ngOnInit(): void {
    this.userCartService.cardItems$.subscribe((res) => {
      console.log(res);
      this.AllProducts = res;
      this.loading = false;
    })
  }

}
