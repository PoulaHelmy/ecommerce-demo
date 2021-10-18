import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "@env/environment";
import {User, UserPayload} from "@core/data/interface/user.model";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  endPoint: string = 'users';

  constructor(private http: HttpClient) {
  }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.ApiUrl}/${this.endPoint}`);
  }

  getAllUsersWithLimit(limit: number): Observable<User[]> {
    return this.http.get<User[]>(`${environment.ApiUrl}/${this.endPoint}?limit=${limit}`);
  }

  getAllUsersWithSort(sort: "desc" | "asc"): Observable<User[]> {
    return this.http.get<User[]>(`${environment.ApiUrl}/${this.endPoint}?sort==${sort}`);
  }

  getSingleUsers(id: number): Observable<User> {
    return this.http.get<User>(`${environment.ApiUrl}/${this.endPoint}/${id}`);
  }

  addNewProduct(userData: UserPayload): Observable<User> {
    return this.http.post<User>(`${environment.ApiUrl}/${this.endPoint}`, userData);
  }

  updateProduct(id: number, userData: UserPayload): Observable<User> {
    return this.http.put<User>(`${environment.ApiUrl}/${this.endPoint}/${id}`, userData);
  }

  deleteProduct(id: number): Observable<User> {
    return this.http.delete<User>(`${environment.ApiUrl}/${this.endPoint}/${id}`);
  }
}
