import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {fromEvent} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {LocalizeRouterService} from "@gilsdav/ngx-translate-router";
import {LoginPopupComponent} from "@core/@components/login-popup/login-popup.component";

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
  hideHeader = false;
  activeURL = this.route.url;

  constructor(
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private route: Router,
    private localizeRouterService: LocalizeRouterService,
  ) {
  }

  ngOnInit(): void {
    this.setCurrentUrl();
    this.setLanguage();
    this.CheckIfInHomePage();
    this.setHeaderStyle();

    this.localizeRouterService.hooks.initialized.subscribe((eventScroll) => {
      this.route.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.activeURL = event.urlAfterRedirects;
          this.CheckIfInHomePage();
        }
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

  setHeaderStyle(): void {
    fromEvent(document, "scroll").subscribe((res) => {
      this.CheckIfInHomePage();
    });
  }

  CheckIfInHomePage(): void {
    const url = this.activeURL;
    if (url == "/ar" || url == "/en") {
      if (window.scrollY >= 699) {
        this.hideHeader = false;
        // this.headerState = HeaderState.Solid;
      }
      if (window.scrollY < 699) {
        this.hideHeader = true;
      }
    }
    // Else
    else {
      if (window.scrollY > 10) {
      } else {
      }
    }
  }

  login(): void {
    this.dialog.open(LoginPopupComponent, {});
  }

  logOut(): void {

  }

  toggleSideBar(): void {
    this.toggleSidenav.emit(true);
  }

  private setCurrentUrl(): void {
    this.currentUrl = this.route.url.replace("/" + this.localizeRouterService.parser.currentLang, "").split("?")[0];
  }
}
