import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {LocalizeRouterService} from "@gilsdav/ngx-translate-router";
import {AuthService} from "@core/http/services/auth.service";
import {LoginPopupComponent} from "@shared/components/login-popup/login-popup.component";
import {UserCartService} from "@core/http/services/user-cart.service";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Output() readonly toggleSidenav: EventEmitter<boolean> = new EventEmitter<boolean>();
  isLoading: Boolean = false;
  locales = this.localizeRouterService.parser.locales;
  currentUrl = "";
  lang = {key: "en", value: "english"};
  cartProducts = 0;

  constructor(
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private route: Router,
    private localizeRouterService: LocalizeRouterService,
    private userService: AuthService,
    private userCartService: UserCartService,
  ) {
  }

  ngOnInit(): void {
    this.setCurrentUrl();
    this.setLanguage();
    this.userCartService.LoadProducts();
    this.userCartService.cardItems$.subscribe((res) => {
      this.cartProducts = res.length;
    })
    this.localizeRouterService.hooks.initialized.subscribe((eventScroll) => {
      this.route.events.subscribe((event) => {
        this.setCurrentUrl();
        this.setLanguage();
      });
    });
  }

  setLanguage(): void {
    if (this.localizeRouterService.parser.currentLang == "en") {
      this.lang = {key: "ar", value: "العربية"};
    } else {
      this.lang = {key: "en", value: "english"};
    }
  }

  login(): void {
    this.dialog.open(LoginPopupComponent, {});
  }

  logOut(): void {
    this.userService.logout();
  }

  toggleSideBar(): void {
    this.toggleSidenav.emit(true);
  }

  private setCurrentUrl(): void {
    this.currentUrl = this.route.url.replace("/" + this.localizeRouterService.parser.currentLang, "").split("?")[0];
  }
}
