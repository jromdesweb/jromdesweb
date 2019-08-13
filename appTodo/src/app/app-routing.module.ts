import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MoreComponent} from './more/more.component';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'more/:task', component:MoreComponent},
  {path:'**', component:Page404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
