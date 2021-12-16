import { NavComponent } from './components/nav/nav.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {banersComponent} from './components/baners/baners.component';
import {HeaderComponent} from './components/header/header.component';
import {NavlogComponent} from './components-login/navlog/navlog.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
   path: "rota1",
   component: banersComponent
 },
  {
   path: "rota2",
   component: HeaderComponent
 },
  {
   path: "login",
   component: NavlogComponent
 },
  {
   path: "",
   component: HomeComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
