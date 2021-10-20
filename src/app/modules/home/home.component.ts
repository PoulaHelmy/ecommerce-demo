import {Component, OnInit} from '@angular/core';
import {ProductsService} from "@core/http/services/products.service";
import {ProductModel} from "@core/data/interface/product.model";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  AllProducts: ProductModel[] = [];
  loading = true;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<img alt="arrow prev" src="assets/images/west-24px.svg">', '<img alt="arrow next" src="assets/images/east-24px.svg">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    nav: true
  }

  constructor(
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.AllProducts = res;
      this.loading = false
    })
  }

}
