import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { BlogViewComponent } from 'src/app/components/blog-view/blog-view.component';
import { BlogCreateComponent } from 'src/app/components/blog-create/blog-create.component';
import { BlogEditComponent } from 'src/app/components/blog-edit/blog-edit.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { HomeComponent } from 'src/app/components/home/home.component';



const appRoutes : Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'blog/:blogId', component:BlogViewComponent},
  { path: 'create', component:BlogCreateComponent},
  { path: 'edit/:blogId', component:BlogEditComponent},
  { path: '**', component:NotFoundComponent},
  { path: '', redirectTo:'home',pathMatch:'full'}
]

@NgModule({
  
  imports: [ RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
