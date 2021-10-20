import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductModel} from '@app/@core/data/interface/product.model';
import {ToasterService} from "@shared/services/toastr.service";

@Injectable({
  providedIn: 'root',
})
export class UserCartService {
  cardItems: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([]);
  cardItems$: Observable<ProductModel[]> = this.cardItems.asObservable();
  readonly cartNameKey = 'cart__products';

  constructor(
    private http: HttpClient,
    private toasterService: ToasterService) {
  }

  AddProduct(product: ProductModel): void {
    const items: ProductModel[] = this.cardItems.value;
    const flag: ProductModel | undefined = items.find((item, index) => {
      return item.id === product.id;
    });
    if (!flag) {
      this.cardItems.next([...items, product]);
      this.SetInLocalStorage()
      this.toasterService.showSuccess('Product added to cart successfully');
    } else {
      this.toasterService.showSuccess('Product Already on the cart');
    }
  }

  LoadProducts(): void {
    const data = localStorage.getItem(this.cartNameKey);
    if (data) {
      this.cardItems.next(JSON.parse(data));
    }
    console.log("LoadProducts ", localStorage.getItem(this.cartNameKey));
  }

  RemoveUnit(id: number): void {
    const data = this.cardItems.value.filter((product) => {
      return product.id !== id;
    });
    this.cardItems.next(data);
    this.SetInLocalStorage();
  }

  SetInLocalStorage(): void {
    localStorage.setItem(this.cartNameKey, JSON.stringify(this.cardItems.value));
  }
}
