import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "@core/http/services/products.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";
import {delay, startWith} from "rxjs/operators";
import {DatePipe} from "@angular/common";
import {BindQueryParamsFactory} from "@ngneat/bind-query-params";
import {ProductModel} from "@core/data/interface/product.model";

interface Filters {
  women__clothing: string;
  men__clothing: string;
  jewelery: string;
  electronics: string;
  price: string;
  title: string;
  rate: string;
}

function valueChanges(group: FormGroup): Observable<any> {
  return group.valueChanges.pipe(startWith(group.value));
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  loading = true;
  AllProducts: ProductModel[] = [];
  filterForm: FormGroup = new FormGroup({
    women__clothing: new FormControl(''),
    men__clothing: new FormControl(''),
    jewelery: new FormControl(''),
    electronics: new FormControl(''),
    price: new FormControl(''),
    title: new FormControl(''),
    rate: new FormControl(''),
  });
  bindQueryParamsManager = this.factory
    .create<Filters>([
      {queryKey: 'electronics'},
      {queryKey: 'women__clothing'},
      {queryKey: 'men__clothing'},
      {queryKey: 'jewelery'},
      {queryKey: 'price'},
      {queryKey: 'title'},
      {queryKey: 'rate'},
    ]).connect(this.filterForm);

  max = 5000;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  price = 0;
  rate = 0;
  vertical = false;
  tickInterval = 1;
  maxRate = 5;
  minRate = 1;

  constructor(private http: HttpClient, private productsService: ProductsService,
              private fb: FormBuilder,
              public datePipe: DatePipe,
              private factory: BindQueryParamsFactory) {
  }


  ngOnInit(): void {
    this.LoadProducts();
    valueChanges(this.filterForm).subscribe((v) => {
      console.log('initialvalue', v);

    });
    this.filterForm.valueChanges.subscribe((v) => {
      console.log('group valueChanges', v);
      this.LoadData();
    });
  }

  LoadProducts(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.AllProducts = res;
      this.loading = false;
    })
  }

  ResetForm(): void {
    this.loading = true;
    this.filterForm.reset();
    this.LoadProducts();
  }

  ngOnDestroy(): void {
    this.bindQueryParamsManager.destroy();
  }

  LoadData(): void {
    this.loading = true;
    of(this.filterForm.value).pipe(delay(3000)).subscribe((res) => {
      if (this.filterForm.controls.title.value && this.filterForm.controls.title.value?.length >= 3) {
        this.AllProducts = this.AllProducts.filter((product) => {
          return product.title.toLowerCase().includes(this.filterForm.controls.title.value);
        })
      }
      if (this.filterForm.controls.price.value && this.filterForm.controls.price.value > 0) {
        this.AllProducts = this.AllProducts.filter((product) => {
          return product.price <= parseInt(this.filterForm.controls.price.value, 10);
        })
      }
      if (this.filterForm.controls.rate.value && this.filterForm.controls.rate.value > 0) {
        this.AllProducts = this.AllProducts.filter((product) => {
          return Math.round(product.rating.rate) <= parseInt(this.filterForm.controls.rate.value, 10);
        })
      }
      if (this.filterForm.controls.men__clothing.value && this.filterForm.controls.men__clothing.value === 'true') {
        this.AllProducts = this.AllProducts.filter((product) => {
          return product.category === 'men\'s clothing';
        })
      }
      if (this.filterForm.controls.women__clothing.value && this.filterForm.controls.women__clothing.value === 'true') {
        this.AllProducts = this.AllProducts.filter((product) => {
          return product.category === 'women\'s clothing';
        })
      }
      if (this.filterForm.controls.electronics.value && this.filterForm.controls.electronics.value === 'true') {
        this.AllProducts = this.AllProducts.filter((product) => {
          return product.category === 'electronics';
        })
      }
      if (this.filterForm.controls.jewelery.value && this.filterForm.controls.jewelery.value === 'true') {
        this.AllProducts = this.AllProducts.filter((product) => {
          return product.category === 'jewelery';
        })
      }
      this.loading = false;
    })
  }
}
