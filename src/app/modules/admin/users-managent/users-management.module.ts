import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersManagementRoutingModule} from './users-management-routing.module';
import {AddEditUsersComponent} from './compponents/add-edit-users/add-edit-users.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    AddEditUsersComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    SharedModule,
  ]
})
export class UsersManagementModule {
}
