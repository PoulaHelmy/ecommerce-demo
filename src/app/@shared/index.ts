import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HtmlPipe} from './pipes/html.pipe';
import {ImgDefaultPipe} from './pipes/img-default.pipe';
import {LocalizeRouterModule} from '@gilsdav/ngx-translate-router';
import {NameSplitPipe} from './pipes/name-split.pipe';
import {SafeUrlPipe} from './pipes/safe-url.pipe';
import {ShowAuthedDirective} from './directives/Structural-Directives/show-authed.directive';
import {SliceTextPipe} from './pipes/slice-text.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {TruncateTextPipe} from './pipes/truncate-text.pipe';
import {MaterialModule} from "@shared/material/material.module";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {ContentLoaderModule} from "@ngneat/content-loader";
import {ContentSkeletonComponent} from "@shared/components/content-skeleton/content-skeleton.component";
import {AppLoaderComponent} from "@shared/components/app-loader/app-loader.component";
import {DialogueComponent} from "@shared/components/confirm-dialog/dialogue.component";
import {NotFoundComponent} from "@shared/components/not-found/not-found.component";
import {RouterModule} from "@angular/router";
import {CarouselModule} from "ngx-owl-carousel-o";
import {RoleDirective} from "@shared/directives/Structural-Directives/role.directive";
import {NotRoleDirective} from "@shared/directives/Structural-Directives/not-role.directive";
import {ScrollToTopComponent} from "@shared/components/scroll-to-top/scroll-to-top.component";
import {LoginPopupComponent} from "@shared/components/login-popup/login-popup.component";

/*----------------------   Imports   ----------------------*/
export const imports: any[] = [
  CommonModule,
  TranslateModule,
  LocalizeRouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  LazyLoadImageModule,
  ContentLoaderModule,
  RouterModule,
  CarouselModule
];
/*----------------------   PIPES   ----------------------*/
export const pipes: any[] = [
  // GetLengthPipe,
  HtmlPipe,
  ImgDefaultPipe,
  NameSplitPipe,
  SafeUrlPipe,
  SliceTextPipe,
  TruncateTextPipe,
];
/*----------------------   Directives   ----------------------*/
export const directives: any[] = [
  ShowAuthedDirective,
  RoleDirective,
  NotRoleDirective
];
/*----------------------   Components   ----------------------*/
export const components: any[] = [
  ContentSkeletonComponent,
  AppLoaderComponent,
  DialogueComponent,
  NotFoundComponent,
  ScrollToTopComponent,
  LoginPopupComponent,
];
