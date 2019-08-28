import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


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
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
