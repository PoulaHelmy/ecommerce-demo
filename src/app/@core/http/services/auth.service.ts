import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {SimpleUser} from '@app/@core/data/interface/user.model';
import {HttpClient} from "@angular/common/http";
import {isPlatformBrowser} from "@angular/common";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData = new BehaviorSubject<SimpleUser>({} as SimpleUser);
  userDate$ = this.userData.asObservable();
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  private readonly TOKEN_NAME = 'commerce_auth';

  constructor(
    apiService: ApiService, private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.checkAuth();
  }


  checkAuth(): void {
    if (this.GetValue(this.TOKEN_NAME)) {
      const user: SimpleUser = JSON.parse(this.GetValue('user') as string);
      this.SetUserDate(user);
      this.router.navigate(['/']).then();
    }
  }

  logout(): void {
    this._isLoggedIn$.next(false);
    this.userData.next({} as SimpleUser);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.router.navigate(['/']).then();
  }

  SetUserDate(user: SimpleUser): void {
    this._isLoggedIn$.next(true);
    this.userData.next(user);
    this.SetValue(this.TOKEN_NAME, this.generateToken(50));
    this.SetValue('user', JSON.stringify(user));
  }

  GetValue(data: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const localItem = localStorage.getItem(data) ?? '';
      if (localItem !== null && localItem !== '' && localItem) {
        return localStorage.getItem(data);
      }
      return null;
    } else {
      return null;
    }
  }

  SetValue(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  generateToken(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
}
