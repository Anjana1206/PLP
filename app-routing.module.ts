import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
  { path: "userLogin", component: LoginRegisterComponent },
 
  
  {path: '', component: HomeComponent},
  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }