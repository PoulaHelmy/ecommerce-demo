import {NgModule} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import * as Shared from './index';

@NgModule({
  declarations: [
    ...Shared.pipes,
    ...Shared.components,
    ...Shared.directives
  ],
  imports: [
    ...Shared.imports
  ],
  exports: [
    ...Shared.imports,
    ...Shared.pipes,
    ...Shared.components,
    ...Shared.directives
  ],
  providers: [CookieService]
})
export class SharedModule {
}
