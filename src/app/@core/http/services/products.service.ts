import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductModel, ProductPayload} from '@app/@core/data/interface/product.model';
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  endPoint: string = 'products';

  constructor(private http: HttpClient) {
  }


  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${environment.ApiUrl}/${this.endPoint}`);
  }

  getAllProductsWithLimit(limit: number): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${environment.ApiUrl}/${this.endPoint}?limit=${limit}`);
  }

  getAllProductsWithSort(sort: "desc" | "asc"): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${environment.ApiUrl}/${this.endPoint}?sort==${sort}`);
  }

  getSingleProducts(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${environment.ApiUrl}/${this.endPoint}/${id}`);
  }

  addNewProduct(product: ProductPayload): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${environment.ApiUrl}/${this.endPoint}`, product);
  }

  updateProduct(id: number, product: ProductPayload): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${environment.ApiUrl}/${this.endPoint}/${id}`, product);
  }

  deleteProduct(id: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${environment.ApiUrl}/${this.endPoint}/${id}`);
  }
}
