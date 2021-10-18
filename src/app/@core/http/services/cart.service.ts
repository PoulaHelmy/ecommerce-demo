import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "@env/environment";
import {Cart, CartPayload} from "@core/data/interface/cart.model";

@Injectable({
  providedIn: 'root',
})
export class cartService {
  endPoint: string = 'carts';

  constructor(private http: HttpClient) {
  }


  getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${environment.ApiUrl}/${this.endPoint}`);
  }

  getAllCardWithLimit(limit: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${environment.ApiUrl}/${this.endPoint}?limit=${limit}`);
  }

  getAllCartWithSort(sort: "desc" | "asc"): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${environment.ApiUrl}/${this.endPoint}?sort==${sort}`);
  }

  getSingleCard(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${environment.ApiUrl}/${this.endPoint}/${id}`);
  }

  //startdate=2019-12-10&enddate=2020-10-10'
  getCardInRangeDate(start: string, end: string): Observable<Cart> {
    return this.http.get<Cart>(`${environment.ApiUrl}/${this.endPoint}/startdate=${start}&enddate=${end}`);
  }

  getUserCarts(userId: number): Observable<Cart> {
    return this.http.get<Cart>(`${environment.ApiUrl}/${this.endPoint}/user=${userId}`);
  }

  addNewCart(cart: CartPayload): Observable<Cart> {
    return this.http.post<Cart>(`${environment.ApiUrl}/${this.endPoint}`, cart);
  }

  updateCart(id: number, cart: CartPayload): Observable<Cart> {
    return this.http.put<Cart>(`${environment.ApiUrl}/${this.endPoint}/${id}`, cart);
  }

  deleteProduct(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`${environment.ApiUrl}/${this.endPoint}/${id}`);
  }
}
