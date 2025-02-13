import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  // {
  //   path: 'register',
  //   component: 
  // },
  { path: '',
  // canActivate: [AuthGuard],
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

