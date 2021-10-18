import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel} from '@app/@core/data/interface/product.model';
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  endPoint: string = 'products/categories';

  constructor(private http: HttpClient) {
  }


  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.ApiUrl}/${this.endPoint}`);
  }


  getProductsByCategory(category: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${environment.ApiUrl}/products/category/${category}`);
  }
}
