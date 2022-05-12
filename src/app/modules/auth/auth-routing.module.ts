import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'login', component:LoginComponent},
      {path:'home', component:HomeComponent},
      {path:'register', component:RegisterComponent},
      {path:'unauthorized', component:UnauthorizedComponent},
      {path:'**', redirectTo:'login'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
