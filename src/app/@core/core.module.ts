import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HotToastModule} from '@ngneat/hot-toast';
import {ServiceWorkerModule} from '@angular/service-worker';
import {BrowserModule, BrowserTransferStateModule, TransferState} from '@angular/platform-browser';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DatePipe, Location} from '@angular/common';
import {environment} from '@env/environment';
import {LAZYLOAD_IMAGE_HOOKS, ScrollHooks} from 'ng-lazyload-image';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TranslateLoader, TranslateModule, TranslateService,} from '@ngx-translate/core';
import {translateBrowserLoaderFactory} from '@core/utils/translate-browser.loader';
import {routes} from '@app/routes';
import {LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings,} from '@gilsdav/ngx-translate-router';
import {localizeBrowserLoaderFactory} from '@core/utils/localize-browser.loader';
import {MainLayoutComponent} from './@components/layouts/main-layout/main-layout.component';
import {MainHeaderComponent} from './@components/layouts/main-header/main-header.component';
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {LoginPopupComponent} from './@components/login-popup/login-popup.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MaterialModule} from "@shared/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CategoriesHeaderComponent} from './@components/categories-header/categories-header.component';
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    LoginPopupComponent,
    CategoriesHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [
          TranslateService,
          Location,
          LocalizeRouterSettings,
          HttpClient,
          TransferState,
        ],
      },
      initialNavigation: true,
    }),
    HotToastModule.forRoot({
      position: 'top-right',
      reverseOrder: false,
      dismissible: true,
      autoClose: true,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:15000',
    }),
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    MainLayoutComponent
  ],
  providers: [
    // AuthInterceptorProvider,
    // FakeBackendProvider,
    DatePipe,
    {provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks},
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
