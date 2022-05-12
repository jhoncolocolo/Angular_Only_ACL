import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { CreateUserComponent } from './pages/user/create/create.component';
import { EditUserComponent } from './pages/user/edit/edit.component';
import { IndexUserComponent } from './pages/user/index/index.component';
import { IndexRoleComponent } from './pages/role/index/index.component';
import { CreateRoleComponent } from './pages/role/create/create.component';
import { EditRoleComponent } from './pages/role/edit/edit.component';
import { IndexPermissionComponent } from './pages/permission/index/index.component';
import { CreatePermissionComponent } from './pages/permission/create/create.component';
import { EditPermissionComponent } from './pages/permission/edit/edit.component';


@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    IndexUserComponent,
    IndexRoleComponent,
    CreateRoleComponent,
    EditRoleComponent,
    IndexPermissionComponent,
    CreatePermissionComponent,
    EditPermissionComponent

  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }
