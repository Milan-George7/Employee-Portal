import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

//setting path
const routes: Routes = [
  { path: 'users', canActivate:[authGuard] ,loadChildren: () => import('./Modules/users/users.module').then(m => m.UsersModule) },

  {
    path:'',component:LoginComponent
  },
  {
    path:'dashboard',component:HomeComponent, canActivate:[authGuard]
  },
  //redirecting random path
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
