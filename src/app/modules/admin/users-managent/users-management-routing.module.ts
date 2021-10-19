import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from "@app/modules/admin/users-managent/pages/users-page/users-page.component";


const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule {
}
