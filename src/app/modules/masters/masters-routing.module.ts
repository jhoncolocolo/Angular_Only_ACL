import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './pages/user/create/create.component';
import { IndexUserComponent } from './pages/user/index/index.component';
import { EditUserComponent } from './pages/user/edit/edit.component';
import { IndexRoleComponent } from './pages/role/index/index.component';
import { CreateRoleComponent } from './pages/role/create/create.component';
import { EditRoleComponent } from './pages/role/edit/edit.component';
import { EditPermissionComponent } from './pages/permission/edit/edit.component';
import { CreatePermissionComponent } from './pages/permission/create/create.component';
import { IndexPermissionComponent } from './pages/permission/index/index.component';
import { CanGuard } from 'src/app/guards/can.guard';

const routes: Routes = [
  {
    path:'',
    canActivateChild:[CanGuard], //We need to check if the current user has permissions in this module, in this file we should not use AuthMiddleware because in the main routing file we have already declared this Middleware for this module with canActivateChild
    children:[
      {path:'users',component:IndexUserComponent,data:{'name':'users.index'}},
      {path:'users/create',component:CreateUserComponent,data:{'name':'users.create'}},
      {path:'users/edit',component:EditUserComponent,data:{'name':'users.edit'}},
      {path:'roles',component:IndexRoleComponent,data:{'name':'roles.index'}},
      {path:'roles/create',component:CreateRoleComponent,data:{'name':'roles.create'}},
      {path:'roles/edit',component:EditRoleComponent,data:{'name':'roles.edit'}},
      {path:'permissions',component:IndexPermissionComponent,data:{'name':'permissions.index'}},
      {path:'permissions/create',component:CreatePermissionComponent,data:{'name':'permissions.create'}},
      {path:'permissions/edit',component:EditPermissionComponent,data:{'name':'permissions.edit'}},
      {path:'**',redirectTo:'users'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
