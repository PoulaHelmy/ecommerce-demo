import {NgModule} from '@angular/core';
import {components, directives, imports, pipes} from "@shared/index";
import {CookieService} from "ngx-cookie-service";


@NgModule({
  declarations: [
    ...pipes,
    ...components,
    ...directives
  ],
  imports: [
    ...imports
  ],
  exports: [
    ...imports,
    ...pipes,
    ...components,
    ...directives
  ],
  providers: [CookieService]
})
export class SharedModule {
}
