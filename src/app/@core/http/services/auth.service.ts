import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthPayload, UserModel} from '@app/@core/data/interface/user.model';
import {tap} from 'rxjs/operators';
import {environment} from "@env/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: UserModel;
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  private readonly TOKEN_NAME = 'commerce_auth';

  constructor(private apiService: ApiService, private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
  }

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
        this.user = this.getUser(response.token);
      })
    );
  }

  LoginUser(userData: AuthPayload): Observable<string> {
    return this.http.post<string>(`${environment.ApiUrl}/auth/login`, userData);
  }

  private getUser(token: string): UserModel {
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
}
