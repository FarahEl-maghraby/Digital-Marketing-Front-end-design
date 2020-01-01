import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component'
import {ContactComponent} from './views/contact/contact.component'
import { ServicesComponent } from './views/services/services.component';
import { BlogsComponent } from './views/blogs/blogs.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'services',component:ServicesComponent},
  {path:'blog',component:BlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
