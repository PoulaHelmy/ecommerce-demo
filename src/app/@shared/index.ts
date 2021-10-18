import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardHoverDirective } from './directives/Attributes-Direstives/card-hover.directive';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { GetLengthPipe } from './pipes/get-length.pipe';
import { GuestDirective } from './directives/Structural-Directives/guest.directive';
import { HtmlPipe } from './pipes/html.pipe';
import { ImgDefaultPipe } from './pipes/img-default.pipe';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { NameSplitPipe } from './pipes/name-split.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ShowAuthedDirective } from './directives/Structural-Directives/show-authed.directive';
import { SliceTextPipe } from './pipes/slice-text.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

export const imports: any[] = [
  CommonModule,
  TranslateModule,
  LocalizeRouterModule,
  FormsModule,
  ReactiveFormsModule,
];
export const pipes: any[] = [
  FilterPipe,
  GetLengthPipe,
  HtmlPipe,
  ImgDefaultPipe,
  NameSplitPipe,
  SafeUrlPipe,
  SliceTextPipe,
  TruncateTextPipe,
];
export const directives: any[] = [
  CardHoverDirective,
  ShowAuthedDirective,
  GuestDirective,
  ShowAuthedDirective,
];
export const components: any[] = [];
