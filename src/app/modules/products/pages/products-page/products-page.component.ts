import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "@core/http/services/products.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {startWith} from "rxjs/operators";
import {DatePipe} from "@angular/common";
import {BindQueryParamsFactory} from "@ngneat/bind-query-params";
import {ProductModel} from "@core/data/interface/product.model";

interface Filters {
  category: string;
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
    category: new FormControl(''),
    price: new FormControl(''),
    title: new FormControl(''),
    rate: new FormControl(''),
  });
  bindQueryParamsManager = this.factory
    .create<Filters>([
      {queryKey: 'category'},
      {queryKey: 'price'},
      {queryKey: 'title'},
      {queryKey: 'rate'},
    ]).connect(this.filterForm);
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  constructor(private http: HttpClient, private productsService: ProductsService,
              private fb: FormBuilder,
              public datePipe: DatePipe,
              private factory: BindQueryParamsFactory) {
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.AllProducts = res;
      this.loading = false;
    })
    valueChanges(this.filterForm).subscribe((v) => {
      console.log('initialvalue', v);
    });

    this.filterForm.valueChanges.subscribe((v) => {
      console.log('group valueChanges', v);
    });
  }

  ResetForm(): void {
    this.loading = true;
    this.filterForm.reset();
    // this.LoadTeachers(1);
  }

  ngOnDestroy(): void {
    this.bindQueryParamsManager.destroy();
  }

  LoadData(): void {

  }
}
