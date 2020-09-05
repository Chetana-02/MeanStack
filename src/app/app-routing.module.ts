import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'home' ,component: HomeComponent},
  {path: '' , redirectTo:'/signup', pathMatch:'full'},
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}